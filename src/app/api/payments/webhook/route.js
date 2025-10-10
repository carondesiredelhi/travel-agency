import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { verifyPaymentSignature } from '@/lib/razorpay';
import { sendBookingConfirmation } from '@/lib/notifications';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');
    
    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const crypto = require('crypto');
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error('❌ Webhook signature verification failed');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);
    console.log('📡 Razorpay webhook received:', event.event);

    // Handle different webhook events
    switch (event.event) {
      case 'payment.captured':
        await handlePaymentCaptured(event.payload.payment.entity);
        break;
      
      case 'payment.failed':
        await handlePaymentFailed(event.payload.payment.entity);
        break;
      
      case 'refund.created':
        await handleRefundCreated(event.payload.refund.entity);
        break;
      
      default:
        console.log('📡 Unhandled webhook event:', event.event);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handlePaymentCaptured(payment) {
  try {
    console.log('💰 Payment captured:', payment.id);
    
    // Find booking by Razorpay order ID
    const booking = await Booking.findOne({
      'payment.razorpayOrderId': payment.order_id
    });

    if (!booking) {
      console.error('❌ Booking not found for payment:', payment.id);
      return;
    }

    // Update booking with payment details
    if (booking.payment.status !== 'paid') {
      booking.payment.status = 'paid';
      booking.payment.razorpayPaymentId = payment.id;
      booking.payment.paymentDate = new Date();
      booking.status = 'confirmed';
      await booking.save();

      // Send confirmation notifications
      try {
        const notificationResults = await sendBookingConfirmation(booking.getSummary());
        console.log('📧📱 Webhook confirmation notification results:', notificationResults);
      } catch (notificationError) {
        console.error('❌ Webhook notification error:', notificationError);
      }
    }
  } catch (error) {
    console.error('❌ Error handling payment captured:', error);
  }
}

async function handlePaymentFailed(payment) {
  try {
    console.log('❌ Payment failed:', payment.id);
    
    // Find booking by Razorpay order ID
    const booking = await Booking.findOne({
      'payment.razorpayOrderId': payment.order_id
    });

    if (!booking) {
      console.error('❌ Booking not found for failed payment:', payment.id);
      return;
    }

    // Update booking with failed payment status
    booking.payment.status = 'failed';
    booking.payment.razorpayPaymentId = payment.id;
    await booking.save();

    console.log('📝 Booking payment status updated to failed:', booking.bookingId);
  } catch (error) {
    console.error('❌ Error handling payment failed:', error);
  }
}

async function handleRefundCreated(refund) {
  try {
    console.log('💸 Refund created:', refund.id);
    
    // Find booking by payment ID
    const booking = await Booking.findOne({
      'payment.razorpayPaymentId': refund.payment_id
    });

    if (!booking) {
      console.error('❌ Booking not found for refund:', refund.id);
      return;
    }

    // Update booking with refund details
    booking.payment.status = 'refunded';
    booking.payment.refundAmount = refund.amount / 100; // Convert from paise
    booking.payment.refundDate = new Date();
    booking.payment.refundReason = refund.notes?.reason || 'Customer request';
    await booking.save();

    console.log('📝 Booking refund processed:', booking.bookingId);
  } catch (error) {
    console.error('❌ Error handling refund created:', error);
  }
}
