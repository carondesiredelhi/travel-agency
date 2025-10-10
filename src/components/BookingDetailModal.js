'use client';
import { useState, useEffect } from 'react';

const BookingDetailModal = ({ isOpen, onClose, bookingId }) => {
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen && bookingId) {
      fetchBookingDetails();
    }
  }, [isOpen, bookingId]);

  const fetchBookingDetails = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/admin/bookings?bookingId=${bookingId}`);
      const data = await response.json();
      
      if (data.success && data.booking) {
        setBooking(data.booking);
      } else {
        setError(data.error || 'Failed to fetch booking details');
      }
    } catch (error) {
      console.error('Error fetching booking details:', error);
      setError('Failed to fetch booking details');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatDate = (date) => {
    if (!date) return 'Not specified';
    return new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'paid': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Booking Details</h2>
              {booking && (
                <p className="text-indigo-600 font-medium">#{booking.bookingId}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-white rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              <span className="ml-3 text-gray-600">Loading booking details...</span>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-red-700">{error}</span>
              </div>
            </div>
          )}

          {booking && (
            <div className="space-y-6">
              {/* Status Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Booking Status</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Payment Status</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPaymentStatusColor(booking.payment?.status)}`}>
                    {booking.payment?.status?.charAt(0).toUpperCase() + booking.payment?.status?.slice(1)}
                  </span>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Total Amount</h3>
                  <div className="text-xl font-bold text-indigo-600">
                    {formatPrice(booking.totalPrice)}
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Full Name</label>
                    <p className="text-gray-800 font-medium">{booking.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <p className="text-gray-800">{booking.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Phone</label>
                    <p className="text-gray-800">+91{booking.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Passenger Count</label>
                    <p className="text-gray-800">{booking.passengerCount || 'Not specified'}</p>
                  </div>
                  {booking.comments && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-600">Comments</label>
                      <p className="text-gray-800 bg-white p-3 rounded-lg border">{booking.comments}</p>
                    </div>
                  )}
                  {booking.specialRequests && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-600">Special Requests</label>
                      <p className="text-gray-800 bg-white p-3 rounded-lg border">{booking.specialRequests}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Trip Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Trip Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Region</label>
                    <p className="text-gray-800 font-medium capitalize">{booking.region}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Origin</label>
                    <p className="text-gray-800">{booking.origin}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Duration</label>
                    <p className="text-gray-800">{booking.duration}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Vehicle Type</label>
                    <p className="text-gray-800 capitalize">{booking.vehicleType}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-600">Destination</label>
                    <p className="text-gray-800">{booking.destination}</p>
                  </div>
                  {booking.travelDate && (
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Travel Date</label>
                      <p className="text-gray-800">{formatDate(booking.travelDate)}</p>
                    </div>
                  )}
                  {booking.returnDate && (
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Return Date</label>
                      <p className="text-gray-800">{formatDate(booking.returnDate)}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Add-ons */}
              {booking.addOns && booking.addOns.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Add-ons</h3>
                  <div className="space-y-2">
                    {booking.addOns.map((addon, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border">
                        <span className="text-gray-800">{addon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Information */}
              {booking.payment && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Payment Status</label>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getPaymentStatusColor(booking.payment.status)}`}>
                        {booking.payment.status.charAt(0).toUpperCase() + booking.payment.status.slice(1)}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Amount</label>
                      <p className="text-gray-800 font-medium">{formatPrice(booking.payment.amount || booking.totalPrice)}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Currency</label>
                      <p className="text-gray-800">{booking.payment.currency || 'INR'}</p>
                    </div>
                    {booking.payment.paymentDate && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Payment Date</label>
                        <p className="text-gray-800">{formatDate(booking.payment.paymentDate)}</p>
                      </div>
                    )}
                    {booking.payment.razorpayOrderId && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Razorpay Order ID</label>
                        <p className="text-gray-800 font-mono text-sm bg-white p-2 rounded border">{booking.payment.razorpayOrderId}</p>
                      </div>
                    )}
                    {booking.payment.razorpayPaymentId && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Razorpay Payment ID</label>
                        <p className="text-gray-800 font-mono text-sm bg-white p-2 rounded border">{booking.payment.razorpayPaymentId}</p>
                      </div>
                    )}
                    {booking.payment.refundAmount > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Refund Amount</label>
                        <p className="text-red-600 font-medium">{formatPrice(booking.payment.refundAmount)}</p>
                      </div>
                    )}
                    {booking.payment.refundDate && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Refund Date</label>
                        <p className="text-gray-800">{formatDate(booking.payment.refundDate)}</p>
                      </div>
                    )}
                    {booking.payment.refundReason && (
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-600">Refund Reason</label>
                        <p className="text-gray-800 bg-white p-3 rounded-lg border">{booking.payment.refundReason}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Booking Timeline */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Timeline</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Booking Created</p>
                      <p className="text-xs text-gray-600">{formatDate(booking.bookingDate)}</p>
                    </div>
                  </div>
                  {booking.payment?.paymentDate && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Payment Completed</p>
                        <p className="text-xs text-gray-600">{formatDate(booking.payment.paymentDate)}</p>
                      </div>
                    </div>
                  )}
                  {booking.lastUpdated && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Last Updated</p>
                        <p className="text-xs text-gray-600">{formatDate(booking.lastUpdated)}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Pricing Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Base Price</span>
                    <span className="font-medium">{formatPrice(booking.basePrice)}</span>
                  </div>
                  {booking.addOnPrice > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Add-ons</span>
                      <span className="font-medium">{formatPrice(booking.addOnPrice)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">Total Amount</span>
                      <span className="text-xl font-bold text-indigo-600">{formatPrice(booking.totalPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailModal;
