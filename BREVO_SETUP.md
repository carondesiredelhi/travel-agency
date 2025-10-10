# Brevo Email & SMS Setup Guide

## ✅ Fixed: Next.js 15 Compatibility

**Issue Resolved**: The original Brevo SDK had compatibility issues with Next.js 15 and Turbopack. We've replaced it with direct REST API calls for better compatibility and performance.

## Environment Variables Required

Add these variables to your `.env.local` file:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/travel-agency?retryWrites=true&w=majority

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password-here
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Brevo Configuration (REST API - No SDK needed!)
BREVO_API_KEY=your-brevo-api-key-here
SENDER_EMAIL=your-verified-email@domain.com
SENDER_NAME=Your Travel Agency Name
SMS_SENDER=YourSMSName
```

## Brevo Setup Steps

### 1. Create Brevo Account
1. Go to [Brevo.com](https://www.brevo.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get API Key
1. Login to your Brevo dashboard
2. Go to **Settings** → **API Keys**
3. Create a new API key
4. Copy the API key and add it to `BREVO_API_KEY`

### 3. ✅ No SDK Installation Required
- **Previous**: Required `sib-api-v3-sdk` package (caused Next.js 15 issues)
- **Current**: Uses direct REST API calls (better compatibility)
- **Benefits**: Faster builds, smaller bundle size, no module conflicts

### 4. Verify Sender Email
1. Go to **Settings** → **Senders & IP**
2. Add and verify your sender email address
3. Use this email in `SENDER_EMAIL`
4. Set a friendly name in `SENDER_NAME`

### 5. Setup SMS (Optional)
1. Go to **SMS** → **Settings**
2. Add your SMS sender name
3. Use this name in `SMS_SENDER`
4. Note: SMS requires credits in your Brevo account

## Testing the Setup

### 1. Test API Endpoint
Visit: `http://localhost:3000/api/test-notifications`

This will send a test email and SMS to verify your configuration.

### 2. Test with Real Booking
1. Create a booking through your website
2. Check your email and phone for confirmation messages
3. Update booking status in admin panel
4. Check for status update notifications

## Notification Triggers

### Automatic Email & SMS Sent When:

1. **New Booking Created**
   - Customer receives confirmation email and SMS
   - Includes booking details and reference number

2. **Admin Changes Booking Status**
   - Customer receives status update email and SMS
   - Different messages for each status (pending, confirmed, cancelled, completed)

## Email Templates

The system includes beautiful HTML email templates with:
- Responsive design
- Company branding
- Booking details
- Status-specific messaging
- Professional styling

## SMS Templates

Concise SMS messages including:
- Booking reference
- Status updates
- Key trip details
- Contact information

## Troubleshooting

### Common Issues:

1. **"Email configuration missing"**
   - Check all Brevo environment variables are set
   - Verify API key is correct

2. **"SMS configuration missing"**
   - Check SMS_SENDER is set
   - Ensure you have SMS credits in Brevo

3. **Emails not sending**
   - Verify sender email is verified in Brevo
   - Check API key permissions

4. **SMS not sending**
   - Ensure you have SMS credits
   - Verify SMS sender name is approved

### Debug Mode:
Check server logs for detailed error messages when notifications fail.

## Cost Information

- **Email**: Free tier includes 300 emails/day
- **SMS**: Requires credits (varies by country)
- **Upgrade**: Available for higher limits

## Support

- Brevo Documentation: [developers.brevo.com](https://developers.brevo.com)
- Brevo Support: Available in your dashboard

