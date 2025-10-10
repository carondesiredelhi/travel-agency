import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { adminAuthMiddleware } from '@/lib/adminAuth';

async function getContacts(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const contactId = searchParams.get('contactId');
    
    // If contactId is provided, return single contact details
    if (contactId) {
      let contact;
      
      // First try to find by _id if it looks like an ObjectId
      if (contactId.match(/^[0-9a-fA-F]{24}$/)) {
        contact = await Contact.findById(contactId);
      } else {
        // Otherwise, find by inquiryId virtual field
        const contacts = await Contact.find({});
        contact = contacts.find(c => c.inquiryId === contactId);
      }
      
      if (!contact) {
        return NextResponse.json(
          { error: 'Contact inquiry not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json({
        success: true,
        contact: contact.getFullDetails()
      });
    }

    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 20;
    const status = searchParams.get('status');
    const inquiryType = searchParams.get('inquiryType');
    const search = searchParams.get('search');

    // Build query
    let query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (inquiryType) {
      query.inquiryType = inquiryType;
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

async function updateContact(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const contactId = searchParams.get('id');
    
    if (!contactId) {
      return NextResponse.json(
        { error: 'Contact ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { status, adminResponse, respondedBy } = body;

    // Find contact by custom inquiryId or _id
    let contact;
    
    // First try to find by _id if it looks like an ObjectId
    if (contactId.match(/^[0-9a-fA-F]{24}$/)) {
      contact = await Contact.findById(contactId);
    } else {
      // Otherwise, find by inquiryId virtual field
      const contacts = await Contact.find({});
      contact = contacts.find(c => c.inquiryId === contactId);
    }
    
    if (!contact) {
      return NextResponse.json(
        { error: 'Contact inquiry not found' },
        { status: 404 }
      );
    }

    const updateData = {};
    if (status) updateData.status = status;
    if (adminResponse !== undefined) updateData.adminResponse = adminResponse;
    if (respondedBy) updateData.respondedBy = respondedBy;
    
    // If status is being updated to responded or resolved, set response date
    if (status && ['responded', 'resolved'].includes(status)) {
      updateData.responseDate = new Date();
    }
    
    updateData.lastUpdated = new Date();

    const updatedContact = await Contact.findByIdAndUpdate(
      contact._id,
      updateData,
      { new: true }
    );

    return NextResponse.json({
      success: true,
      contact: updatedContact.getSummary()
    });

  } catch (error) {
    console.error('Update contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

async function deleteContact(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const contactId = searchParams.get('id');
    
    if (!contactId) {
      return NextResponse.json(
        { error: 'Contact ID is required' },
        { status: 400 }
      );
    }

    // Find contact by custom inquiryId or _id
    let contact;
    
    // First try to find by _id if it looks like an ObjectId
    if (contactId.match(/^[0-9a-fA-F]{24}$/)) {
      contact = await Contact.findById(contactId);
    } else {
      // Otherwise, find by inquiryId virtual field
      const contacts = await Contact.find({});
      contact = contacts.find(c => c.inquiryId === contactId);
    }
    
    if (!contact) {
      return NextResponse.json(
        { error: 'Contact inquiry not found' },
        { status: 404 }
      );
    }

    await Contact.findByIdAndDelete(contact._id);

    return NextResponse.json({
      success: true,
      message: 'Contact inquiry deleted successfully'
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return await adminAuthMiddleware(request, getContacts)();
}

export async function PUT(request) {
  return await adminAuthMiddleware(request, updateContact)();
}

export async function DELETE(request) {
  return await adminAuthMiddleware(request, deleteContact)();
}
