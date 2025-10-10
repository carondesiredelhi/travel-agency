import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { createRazorpayOrder } from '@/lib/razorpay';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'region', 'origin', 'duration', 'destination', 'vehicleType', 'totalPrice'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate phone number (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(body.phone.replace(/\D/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid 10-digit Indian phone number' },
        { status: 400 }
      );
    }

    // Create booking with pending payment status
    const booking = new Booking({
      // User Information
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone.replace(/\D/g, ''),
      comments: body.comments?.trim() || '',
      
      // Booking Details
      region: body.region,
      origin: body.origin,
      duration: body.duration,
      destination: body.destination,
      vehicleType: body.vehicleType,
      addOns: body.addOns || [],
      
      // Pricing
      basePrice: body.basePrice || 0,
      addOnPrice: body.addOnPrice || 0,
      totalPrice: body.totalPrice,
      
      // Payment Information
      payment: {
        status: 'pending',
        amount: body.totalPrice,
        currency: 'INR'
      },
      
      // Additional Information
      travelDate: body.travelDate ? new Date(body.travelDate) : null,
      passengerCount: body.passengerCount || 1,
      specialRequests: body.specialRequests?.trim() || '',
      
      // Status
      status: 'pending'
    });

    // Save booking to database
    const savedBooking = await booking.save();

    // Create Razorpay order
    const orderResult = await createRazorpayOrder(
      savedBooking.totalPrice,
      'INR',
      savedBooking.bookingId
    );

    if (!orderResult.success) {
      // If order creation fails, delete the booking
      await Booking.findByIdAndDelete(savedBooking._id);
      return NextResponse.json(
        { error: 'Payment order creation failed', details: orderResult.error },
        { status: 500 }
      );
    }

    // Update booking with Razorpay order ID
    savedBooking.payment.razorpayOrderId = orderResult.order.id;
    await savedBooking.save();

    // Return order details for frontend
    return NextResponse.json({
      success: true,
      order: {
        id: orderResult.order.id,
        amount: orderResult.order.amount,
        currency: orderResult.order.currency,
        receipt: orderResult.order.receipt
      },
      booking: {
        id: savedBooking._id,
        bookingId: savedBooking.bookingId
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Payment order creation error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
