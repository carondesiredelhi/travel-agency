import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  // Contact Information
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },

  // Inquiry Details
  inquiryType: {
    type: String,
    enum: ['general', 'booking', 'fleet', 'custom', 'complaint', 'other'],
    default: 'general'
  },
  status: {
    type: String,
    enum: ['new', 'in_progress', 'responded', 'resolved'],
    default: 'new'
  },

  // Admin Response
  adminResponse: {
    type: String,
    trim: true,
    maxlength: [1000, 'Admin response cannot exceed 1000 characters']
  },
  respondedBy: {
    type: String,
    trim: true
  },
  responseDate: {
    type: Date
  },

  // Timestamps
  inquiryDate: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ email: 1, inquiryDate: -1 });
contactSchema.index({ status: 1 });
contactSchema.index({ inquiryType: 1 });

// Virtual for formatted inquiry ID
contactSchema.virtual('inquiryId').get(function() {
  return `INQ${this._id.toString().slice(-8).toUpperCase()}`;
});

// Method to get inquiry summary
contactSchema.methods.getSummary = function() {
  return {
    _id: this._id,
    inquiryId: this.inquiryId,
    name: this.name,
    email: this.email,
    phone: this.phone,
    subject: this.subject,
    inquiryType: this.inquiryType,
    status: this.status,
    inquiryDate: this.inquiryDate,
    lastUpdated: this.lastUpdated
  };
};

// Method to get full inquiry details
contactSchema.methods.getFullDetails = function() {
  return {
    _id: this._id,
    inquiryId: this.inquiryId,
    name: this.name,
    email: this.email,
    phone: this.phone,
    subject: this.subject,
    message: this.message,
    inquiryType: this.inquiryType,
    status: this.status,
    adminResponse: this.adminResponse,
    respondedBy: this.respondedBy,
    responseDate: this.responseDate,
    inquiryDate: this.inquiryDate,
    lastUpdated: this.lastUpdated
  };
};

// Pre-save middleware to update lastUpdated
contactSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  next();
});

// Ensure virtual fields are serialized
contactSchema.set('toJSON', { virtuals: true });
contactSchema.set('toObject', { virtuals: true });

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
