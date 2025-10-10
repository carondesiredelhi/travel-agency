# Razorpay Payment Integration Setup

This document explains how to set up Razorpay payment gateway for the travel agency booking system.

## 🔧 Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here

# Public Razorpay Key (for frontend)
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id_here
```

## 📋 Razorpay Account Setup

### 1. Create Razorpay Account
1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up for a new account or log in
3. Complete the KYC process

### 2. Get API Keys
1. Go to **Settings** → **API Keys**
2. Generate **Test Keys** for development
3. Generate **Live Keys** for production
4. Copy the **Key ID** and **Key Secret**

### 3. Configure Webhooks
1. Go to **Settings** → **Webhooks**
2. Create a new webhook with URL: `https://yourdomain.com/api/payments/webhook`
3. Select events:
   - `payment.captured`
   - `payment.failed`
   - `refund.created`
4. Copy the **Webhook Secret**

## 🚀 Payment Flow

### 1. User Journey
1. User selects trip details on homepage
2. User fills booking form
3. User clicks "Proceed to Payment"
4. Razorpay payment modal opens
5. User completes payment
6. Payment is verified
7. Booking is confirmed
8. User receives confirmation email/SMS

### 2. API Endpoints

#### Create Payment Order
```
POST /api/payments/create-order
```
- Creates a booking with pending payment status
- Creates Razorpay order
- Returns order details for frontend

#### Verify Payment
```
POST /api/payments/verify
```
- Verifies payment signature
- Updates booking status to confirmed
- Sends confirmation notifications

#### Webhook Handler
```
POST /api/payments/webhook
```
- Handles Razorpay webhook events
- Additional security layer
- Processes payment status updates

## 💳 Payment Methods Supported

- Credit Cards (Visa, MasterCard, American Express)
- Debit Cards
- UPI (Google Pay, PhonePe, Paytm, etc.)
- Net Banking
- Wallets (Paytm, Mobikwik, etc.)
- EMI Options

## 🔒 Security Features

### 1. Payment Verification
- Server-side signature verification
- Webhook signature validation
- Double verification system

### 2. Data Protection
- PCI DSS compliant
- Encrypted payment data
- Secure API communication

### 3. Fraud Prevention
- Razorpay's built-in fraud detection
- Risk assessment algorithms
- Real-time monitoring

## 📊 Database Schema Updates

The Booking model now includes payment information:

```javascript
payment: {
  status: 'pending' | 'paid' | 'failed' | 'refunded',
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
  amount: Number,
  currency: String,
  paymentDate: Date,
  refundAmount: Number,
  refundDate: Date,
  refundReason: String
}
```

## 🧪 Testing

### Test Cards (Razorpay Test Mode)
```
Visa: 4111 1111 1111 1111
MasterCard: 5555 5555 5555 4444
CVV: Any 3 digits
Expiry: Any future date
```

### Test UPI IDs
```
success@razorpay
failure@razorpay
```

## 🚨 Error Handling

### Common Error Scenarios
1. **Payment Failed**: User can retry payment
2. **Network Issues**: Graceful fallback with retry option
3. **Invalid Signature**: Payment verification fails
4. **Webhook Failures**: Manual verification required

### Error Messages
- User-friendly error messages
- Detailed logging for debugging
- Automatic retry mechanisms

## 📱 Mobile Responsiveness

- Razorpay checkout is mobile-optimized
- Responsive payment modal
- Touch-friendly interface
- Mobile payment methods (UPI, wallets)

## 🔄 Refund Process

### Automatic Refunds
- Cancelled bookings
- Failed services
- Customer disputes

### Manual Refunds
- Admin panel integration
- Partial refunds supported
- Refund tracking

## 📈 Analytics & Reporting

### Payment Analytics
- Success rates
- Payment method preferences
- Revenue tracking
- Failed payment analysis

### Business Insights
- Booking conversion rates
- Payment completion rates
- Customer payment behavior

## 🛠️ Troubleshooting

### Common Issues

#### 1. Payment Modal Not Opening
- Check Razorpay script loading
- Verify API key configuration
- Check browser console for errors

#### 2. Payment Verification Failing
- Verify webhook secret
- Check signature generation
- Ensure proper order ID mapping

#### 3. Webhook Not Receiving Events
- Verify webhook URL
- Check SSL certificate
- Ensure proper event selection

### Debug Mode
Enable debug logging by setting:
```env
NODE_ENV=development
```

## 📞 Support

### Razorpay Support
- [Documentation](https://razorpay.com/docs/)
- [Support Portal](https://razorpay.com/support/)
- [Status Page](https://status.razorpay.com/)

### Application Support
- Check application logs
- Verify environment variables
- Test with Razorpay test credentials

## 🔄 Migration from Direct Booking

### Before (Direct Booking)
1. User fills form
2. Booking created immediately
3. No payment required

### After (Payment Required)
1. User fills form
2. Payment order created
3. User pays via Razorpay
4. Payment verified
5. Booking confirmed
6. Notifications sent

### Benefits
- ✅ Secure payment processing
- ✅ Reduced no-shows
- ✅ Better cash flow
- ✅ Professional payment experience
- ✅ Multiple payment options
- ✅ Automatic refund handling
