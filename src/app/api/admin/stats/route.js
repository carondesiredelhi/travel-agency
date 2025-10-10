import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { adminAuthMiddleware } from '@/lib/adminAuth';

async function getStats(request) {
  try {
    await connectDB();

    // Get basic counts
    const totalBookings = await Booking.countDocuments();
    const pendingBookings = await Booking.countDocuments({ status: 'pending' });
    const confirmedBookings = await Booking.countDocuments({ status: 'confirmed' });
    const cancelledBookings = await Booking.countDocuments({ status: 'cancelled' });
    const completedBookings = await Booking.countDocuments({ status: 'completed' });

    // Get revenue stats
    const revenueStats = await Booking.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$totalPrice' },
          averageBookingValue: { $avg: '$totalPrice' },
          minBookingValue: { $min: '$totalPrice' },
          maxBookingValue: { $max: '$totalPrice' }
        }
      }
    ]);

    // Get bookings by region
    const bookingsByRegion = await Booking.aggregate([
      {
        $group: {
          _id: '$region',
          count: { $sum: 1 },
          revenue: { $sum: '$totalPrice' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Get bookings by vehicle type
    const bookingsByVehicle = await Booking.aggregate([
      {
        $group: {
          _id: '$vehicleType',
          count: { $sum: 1 },
          revenue: { $sum: '$totalPrice' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Get recent bookings (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentBookings = await Booking.countDocuments({
      bookingDate: { $gte: thirtyDaysAgo }
    });

    // Get bookings by month (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const bookingsByMonth = await Booking.aggregate([
      {
        $match: {
          bookingDate: { $gte: sixMonthsAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$bookingDate' },
            month: { $month: '$bookingDate' }
          },
          count: { $sum: 1 },
          revenue: { $sum: '$totalPrice' }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);

    const stats = {
      overview: {
        totalBookings,
        pendingBookings,
        confirmedBookings,
        cancelledBookings,
        completedBookings,
        recentBookings
      },
      revenue: revenueStats[0] || {
        totalRevenue: 0,
        averageBookingValue: 0,
        minBookingValue: 0,
        maxBookingValue: 0
      },
      bookingsByRegion,
      bookingsByVehicle,
      bookingsByMonth
    };

    return NextResponse.json({
      success: true,
      stats
    });

  } catch (error) {
    console.error('Get stats error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return await adminAuthMiddleware(request, getStats)();
}
