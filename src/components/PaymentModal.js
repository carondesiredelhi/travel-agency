'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PaymentModal = ({ isOpen, onClose, bookingData, orderData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen && orderData) {
      loadRazorpayScript();
    }
  }, [isOpen, orderData]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await loadRazorpayScript();
      if (!res) {
        setError('Razorpay SDK failed to load. Please check your internet connection.');
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Car On Desire',
        description: `Booking for ${bookingData.region} - ${bookingData.duration}`,
        order_id: orderData.id,
        prefill: {
          name: bookingData.name,
          email: bookingData.email,
          contact: `+91${bookingData.phone}`,
        },
        notes: {
          bookingId: bookingData.bookingId,
          region: bookingData.region,
          destination: bookingData.destination,
        },
        theme: {
          color: '#4F46E5', // Indigo color matching your theme
        },
        handler: async function (response) {
          // Payment successful, verify payment
          await verifyPayment(response);
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            setError('Payment cancelled by user');
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      setError('Payment initialization failed. Please try again.');
      setLoading(false);
    }
  };

  const verifyPayment = async (paymentResponse) => {
    try {
      const response = await fetch('/api/payments/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: orderData.id,
          paymentId: paymentResponse.razorpay_payment_id,
          signature: paymentResponse.razorpay_signature,
          bookingId: bookingData.id,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Payment successful, redirect to success page
        router.push(`/booking/success?bookingId=${bookingData.bookingId}&payment=success`);
      } else {
        setError(result.error || 'Payment verification failed');
        setLoading(false);
      }
    } catch (error) {
      console.error('Payment verification error:', error);
      setError('Payment verification failed. Please contact support.');
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Complete Payment</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              disabled={loading}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Booking Summary */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Destination:</span>
                <span className="font-medium">{bookingData.region}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">From:</span>
                <span className="font-medium">{bookingData.origin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{bookingData.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Vehicle:</span>
                <span className="font-medium">{bookingData.vehicleType}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                <span className="text-gray-600 font-semibold">Total Amount:</span>
                <span className="font-bold text-indigo-600">{formatPrice(bookingData.totalPrice)}</span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-red-700 text-sm">{error}</span>
              </div>
            </div>
          )}

          {/* Payment Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Secure Payment</h3>
            <p className="text-blue-700 text-sm">
              Your payment is secured by Razorpay. We accept all major credit cards, debit cards, UPI, and net banking.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3">
            <button
              onClick={displayRazorpay}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-none"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </div>
              ) : (
                `Pay ${formatPrice(bookingData.totalPrice)}`
              )}
            </button>
            
            <button
              onClick={onClose}
              disabled={loading}
              className="w-full bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
