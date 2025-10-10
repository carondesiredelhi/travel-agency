import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { sendContactConfirmation } from '@/lib/notifications';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
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

    // Validate phone number if provided
    if (body.phone) {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(body.phone.replace(/\D/g, ''))) {
        return NextResponse.json(
          { error: 'Please enter a valid 10-digit Indian phone number' },
          { status: 400 }
        );
      }
    }

    // Get client IP and user agent
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Create new contact inquiry
    const contact = new Contact({
      // Contact Information
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone ? body.phone.replace(/\D/g, '') : '',
      subject: body.subject.trim(),
      message: body.message.trim(),
      
      // Inquiry Details
      inquiryType: body.inquiryType || 'general',
      priority: body.priority || 'medium',
      source: body.source || 'website',
      
      // Technical Information
      ipAddress: ip,
      userAgent: userAgent,
      
      // Status
      status: 'new'
    });

    // Save contact inquiry to database
    const savedContact = await contact.save();

    // Send confirmation email to user
    try {
      const notificationResult = await sendContactConfirmation(savedContact.getSummary());
      console.log('📧 Contact confirmation email sent:', notificationResult);
    } catch (notificationError) {
      console.error('❌ Contact confirmation email error (inquiry still saved):', notificationError);
      // Don't fail the inquiry creation if email fails
    }

    // Return success response with inquiry ID
    return NextResponse.json({
      success: true,
      inquiryId: savedContact.inquiryId,
      message: 'Your inquiry has been submitted successfully. We will get back to you soon!',
      contact: savedContact.getSummary()
    }, { status: 201 });

  } catch (error) {
    console.error('Contact inquiry creation error:', error);
    
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

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 20;
    const status = searchParams.get('status');
    const inquiryType = searchParams.get('inquiryType');
    const priority = searchParams.get('priority');
    const search = searchParams.get('search');

    // Build query
    let query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (inquiryType) {
      query.inquiryType = inquiryType;
    }
    
    if (priority) {
      query.priority = priority;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } }
      ];
    }

    // Get total count
    const total = await Contact.countDocuments(query);

    // Get contacts with pagination
    const contacts = await Contact.find(query)
      .sort({ inquiryDate: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json({
      success: true,
      contacts: contacts.map(contact => contact.getSummary()),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalContacts: total,
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1
      }
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
