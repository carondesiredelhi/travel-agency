'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';

const BookingSuccessContent = () => {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId');
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bookingId) {
      fetchBookingDetails();
    } else {
      setLoading(false);
    }
  }, [bookingId]);

  const fetchBookingDetails = async () => {
    try {
      const response = await fetch(`/api/bookings?bookingId=${bookingId}`);
      const data = await response.json();
      
      if (data.success) {
        setBookingDetails(data.booking);
      }
    } catch (error) {
      console.error('Error fetching booking details:', error);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading booking details...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Booking <span className="text-green-600">Confirmed!</span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Thank you for choosing our services. Your booking has been successfully created.
          </p>

          {bookingId && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Booking Reference</h3>
              <div className="text-2xl font-bold text-indigo-600">{bookingId}</div>
              <p className="text-sm text-gray-500 mt-2">Please save this reference number for your records</p>
            </div>
          )}
        </div>

        {bookingDetails && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Customer Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Name:</span> <span className="font-medium">{bookingDetails.name}</span></div>
                    <div><span className="text-gray-600">Email:</span> <span className="font-medium">{bookingDetails.email}</span></div>
                    <div><span className="text-gray-600">Phone:</span> <span className="font-medium">{bookingDetails.phone}</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Trip Details</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Destination:</span> <span className="font-medium">{bookingDetails.region}</span></div>
                    <div><span className="text-gray-600">From:</span> <span className="font-medium">{bookingDetails.origin}</span></div>
                    <div><span className="text-gray-600">Duration:</span> <span className="font-medium">{bookingDetails.duration}</span></div>
                    <div><span className="text-gray-600">Vehicle:</span> <span className="font-medium">{bookingDetails.vehicleType}</span></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Booking Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Booking ID:</span> <span className="font-medium">{bookingDetails.bookingId}</span></div>
                    <div><span className="text-gray-600">Status:</span> 
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                        bookingDetails.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        bookingDetails.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {bookingDetails.status.charAt(0).toUpperCase() + bookingDetails.status.slice(1)}
                      </span>
                    </div>
                    {bookingDetails.paymentStatus && (
                      <div><span className="text-gray-600">Payment:</span> 
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                          bookingDetails.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                          bookingDetails.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          bookingDetails.paymentStatus === 'failed' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {bookingDetails.paymentStatus.charAt(0).toUpperCase() + bookingDetails.paymentStatus.slice(1)}
                        </span>
                      </div>
                    )}
                    <div><span className="text-gray-600">Booking Date:</span> <span className="font-medium">
                      {new Date(bookingDetails.bookingDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Total Amount</h3>
                  <div className="text-2xl font-bold text-indigo-600">
                    {formatPrice(bookingDetails.totalPrice)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-blue-800 mb-3">What's Next?</h3>
          <ul className="text-blue-700 space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              You will receive a confirmation email shortly with all the details
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              Our team will contact you within 24 hours to confirm your booking
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              Please keep your booking reference number handy for any queries
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              For any changes or cancellations, contact us at least 24 hours before travel
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
          >
            Back to Home
          </Link>
          
          <Link
            href="/contact"
            className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 text-center"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
};

const BookingSuccessPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <BookingSuccessContent />
    </Suspense>
  );
};

export default BookingSuccessPage;
