'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import PaymentModal from '@/components/PaymentModal';

const BookingPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentOrderData, setPaymentOrderData] = useState(null);
  const [createdBooking, setCreatedBooking] = useState(null);
  
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    travelDate: '',
    passengerCount: 1,
    specialRequests: ''
  });

  // Booking details from URL params
  const [bookingDetails, setBookingDetails] = useState({
    region: '',
    origin: '',
    duration: '',
    destination: '',
    vehicleType: '',
    addOns: [],
    basePrice: 0,
    addOnPrice: 0,
    totalPrice: 0
  });

  // Load booking details from URL params
  useEffect(() => {
    const region = searchParams.get('region');
    const origin = searchParams.get('origin');
    const duration = searchParams.get('duration');
    const destination = searchParams.get('destination');
    const vehicleType = searchParams.get('vehicleType');
    const addOns = searchParams.get('addOns') ? JSON.parse(decodeURIComponent(searchParams.get('addOns'))) : [];
    const basePrice = parseInt(searchParams.get('basePrice')) || 0;
    const addOnPrice = parseInt(searchParams.get('addOnPrice')) || 0;
    const totalPrice = parseInt(searchParams.get('totalPrice')) || 0;

    if (!region || !origin || !duration || !vehicleType) {
      router.push('/');
      return;
    }

    setBookingDetails({
      region,
      origin,
      duration,
      destination,
      vehicleType,
      addOns,
      basePrice,
      addOnPrice,
      totalPrice
    });
  }, [searchParams, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getRegionName = (region) => {
    const regionNames = {
      'himachal': 'Himachal Pradesh',
      'uttarakhand': 'Uttarakhand',
      'rajasthan': 'Rajasthan'
    };
    return regionNames[region] || region;
  };

  const getVehicleName = (vehicleType) => {
    const vehicleNames = {
      'sedan': 'Sedan',
      'suv': 'SUV/Innova',
      'tempo': 'Tempo Traveller'
    };
    return vehicleNames[vehicleType] || vehicleType;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create payment order instead of direct booking
      const response = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...bookingDetails
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Store booking and order data for payment
        setCreatedBooking(result.booking);
        setPaymentOrderData(result.order);
        setShowPaymentModal(true);
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
        console.error('Payment order creation failed:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Payment order creation error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!bookingDetails.region) {
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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Complete Your <span className="text-indigo-600">Booking</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Fill in your details to confirm your taxi booking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Booking Summary</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Destination:</span>
                    <span className="font-semibold text-gray-800">{getRegionName(bookingDetails.region)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">From:</span>
                    <span className="font-semibold text-gray-800">{bookingDetails.origin}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-800">{bookingDetails.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Vehicle:</span>
                    <span className="font-semibold text-gray-800">{getVehicleName(bookingDetails.vehicleType)}</span>
                  </div>
                </div>

                {bookingDetails.addOns.length > 0 && (
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-gray-600 mb-2">Add-ons:</div>
                    {bookingDetails.addOns.map((addOn, index) => (
                      <div key={index} className="text-sm text-indigo-600">• {addOn}</div>
                    ))}
                  </div>
                )}

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Base Price:</span>
                    <span className="font-semibold">{formatPrice(bookingDetails.basePrice)}</span>
                  </div>
                  {bookingDetails.addOnPrice > 0 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Add-ons:</span>
                      <span className="font-semibold">{formatPrice(bookingDetails.addOnPrice)}</span>
                    </div>
                  )}
                  <div className="border-t border-indigo-200 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total:</span>
                      <span className="text-2xl font-bold text-indigo-600">{formatPrice(bookingDetails.totalPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Information</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-green-800">Booking Successful!</h4>
                      <p className="text-green-700">Redirecting to confirmation page...</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-red-800">Booking Failed</h4>
                      <p className="text-red-700">Please try again or contact support.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Passengers
                    </label>
                    <select
                      name="passengerCount"
                      value={formData.passengerCount}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    >
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Passenger' : 'Passengers'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={300}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none"
                    placeholder="Any special requests or requirements..."
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.specialRequests.length}/300 characters
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none"
                    placeholder="Any additional information or comments..."
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.comments.length}/500 characters
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      'Proceed to Payment'
                    )}
                  </button>
                  
                  <Link
                    href="/"
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center"
                  >
                    Back to Home
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && createdBooking && paymentOrderData && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          bookingData={{
            ...createdBooking,
            ...bookingDetails,
            ...formData
          }}
          orderData={paymentOrderData}
        />
      )}
    </main>
  );
};

const BookingPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading booking form...</p>
        </div>
      </div>
    }>
      <BookingPageContent />
    </Suspense>
  );
};

export default BookingPage;
