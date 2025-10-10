import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { sendBookingConfirmation } from '@/lib/notifications';

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

    // Create new booking
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
      
      // Additional Information
      travelDate: body.travelDate ? new Date(body.travelDate) : null,
      passengerCount: body.passengerCount || 1,
      specialRequests: body.specialRequests?.trim() || '',
      
      // Status
      status: 'pending'
    });

    // Save booking to database
    const savedBooking = await booking.save();

    // Send confirmation notifications (email and SMS)
    try {
      const notificationResults = await sendBookingConfirmation(savedBooking.getSummary());
      console.log('📧📱 Notification results:', notificationResults);
    } catch (notificationError) {
      console.error('❌ Notification error (booking still created):', notificationError);
      // Don't fail the booking creation if notifications fail
    }

    // Return success response with booking ID
    return NextResponse.json({
      success: true,
      bookingId: savedBooking.bookingId,
      message: 'Booking created successfully',
      booking: savedBooking.getSummary()
    }, { status: 201 });

  } catch (error) {
    console.error('Booking creation error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'A booking with this information already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const bookingId = searchParams.get('bookingId');

    let query = {};
    
    if (email) {
      query.email = email.toLowerCase();
    }
    
    if (bookingId) {
      // Find booking by the custom bookingId format
      const bookings = await Booking.find({});
      const booking = bookings.find(b => b.bookingId === bookingId);
      
      if (!booking) {
        return NextResponse.json(
          { error: 'Booking not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json({
        success: true,
        booking: booking.getSummary()
      });
    }

    // Get all bookings for the email (if provided)
    const bookings = await Booking.find(query)
      .sort({ bookingDate: -1 })
      .limit(50);

    return NextResponse.json({
      success: true,
      bookings: bookings.map(booking => booking.getSummary())
    });

  } catch (error) {
    console.error('Get bookings error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
