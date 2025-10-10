import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { verifyPaymentSignature } from '@/lib/razorpay';
import { sendBookingConfirmation } from '@/lib/notifications';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { orderId, paymentId, signature, bookingId } = body;

    // Validate required fields
    if (!orderId || !paymentId || !signature || !bookingId) {
      return NextResponse.json(
        { error: 'Missing required payment verification fields' },
        { status: 400 }
      );
    }

    // Find the booking
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    // Verify payment signature
    const isSignatureValid = verifyPaymentSignature(orderId, paymentId, signature);
    
    if (!isSignatureValid) {
      // Update payment status to failed
      booking.payment.status = 'failed';
      booking.payment.razorpayPaymentId = paymentId;
      booking.payment.razorpaySignature = signature;
      await booking.save();

      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      );
    }

    // Payment is valid, update booking
    booking.payment.status = 'paid';
    booking.payment.razorpayPaymentId = paymentId;
    booking.payment.razorpaySignature = signature;
    booking.payment.paymentDate = new Date();
    booking.status = 'confirmed'; // Auto-confirm after successful payment
    await booking.save();

    // Send confirmation notifications (email and SMS)
    try {
      const notificationResults = await sendBookingConfirmation(booking.getSummary());
      console.log('📧📱 Payment confirmation notification results:', notificationResults);
    } catch (notificationError) {
      console.error('❌ Notification error (payment still processed):', notificationError);
      // Don't fail the payment verification if notifications fail
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
      booking: booking.getSummary()
    });

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
