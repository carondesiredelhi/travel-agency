import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { adminAuthMiddleware } from '@/lib/adminAuth';
import { sendStatusUpdate } from '@/lib/notifications';

async function getBookings(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get('bookingId');
    
    // If bookingId is provided, return single booking details
    if (bookingId) {
      let booking;
      
      // First try to find by _id if it looks like an ObjectId
      if (bookingId.match(/^[0-9a-fA-F]{24}$/)) {
        booking = await Booking.findById(bookingId);
      } else {
        // Otherwise, find by bookingId virtual field
        const bookings = await Booking.find({});
        booking = bookings.find(b => b.bookingId === bookingId);
      }
      
      if (!booking) {
        return NextResponse.json(
          { error: 'Booking not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json({
        success: true,
        booking: booking.toObject() // Return full booking object with all fields
      });
    }

    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 20;
    const status = searchParams.get('status');
    const region = searchParams.get('region');
    const search = searchParams.get('search');

    // Build query
    let query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (region) {
      query.region = region;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { destination: { $regex: search, $options: 'i' } }
      ];
    }

    // Get total count
    const total = await Booking.countDocuments(query);

    // Get bookings with pagination
    const bookings = await Booking.find(query)
      .sort({ bookingDate: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json({
      success: true,
      bookings: bookings.map(booking => booking.getSummary()),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Get bookings error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function updateBooking(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get('id');
    
    if (!bookingId) {
      return NextResponse.json(
        { error: 'Booking ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { status, comments } = body;

    // Find booking by custom bookingId or _id
    let booking;
    
    // First try to find by _id if it looks like an ObjectId
    if (bookingId.match(/^[0-9a-fA-F]{24}$/)) {
      booking = await Booking.findById(bookingId);
    } else {
      // Otherwise, find by bookingId virtual field
      const bookings = await Booking.find({});
      booking = bookings.find(b => b.bookingId === bookingId);
    }
    
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    // Update booking
    const updateData = {};
    if (status) updateData.status = status;
    if (comments !== undefined) updateData.comments = comments;
    updateData.lastUpdated = new Date();

    const updatedBooking = await Booking.findByIdAndUpdate(
      booking._id,
      updateData,
      { new: true }
    );

    // Send status update notifications (email and SMS)
    if (status && status !== booking.status) {
      try {
        const notificationResults = await sendStatusUpdate(updatedBooking.getSummary(), status);
        console.log('📧📱 Status update notification results:', notificationResults);
      } catch (notificationError) {
        console.error('❌ Status update notification error:', notificationError);
        // Don't fail the status update if notifications fail
      }
    }

    return NextResponse.json({
      success: true,
      booking: updatedBooking.getSummary()
    });

  } catch (error) {
    console.error('Update booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function deleteBooking(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get('id');
    
    if (!bookingId) {
      return NextResponse.json(
        { error: 'Booking ID is required' },
        { status: 400 }
      );
    }

    // Find booking by custom bookingId or _id
    let booking;
    
    // First try to find by _id if it looks like an ObjectId
    if (bookingId.match(/^[0-9a-fA-F]{24}$/)) {
      booking = await Booking.findById(bookingId);
    } else {
      // Otherwise, find by bookingId virtual field
      const bookings = await Booking.find({});
      booking = bookings.find(b => b.bookingId === bookingId);
    }
    
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    await Booking.findByIdAndDelete(booking._id);

    return NextResponse.json({
      success: true,
      message: 'Booking deleted successfully'
    });

  } catch (error) {
    console.error('Delete booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return await adminAuthMiddleware(request, getBookings)();
}

export async function PUT(request) {
  return await adminAuthMiddleware(request, updateBooking)();
}

export async function DELETE(request) {
  return await adminAuthMiddleware(request, deleteBooking)();
}
