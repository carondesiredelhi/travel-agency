import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  // User Information
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
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number']
  },
  comments: {
    type: String,
    trim: true,
    maxlength: [500, 'Comments cannot exceed 500 characters']
  },

  // Booking Details
  region: {
    type: String,
    required: [true, 'Region is required'],
    enum: ['himachal', 'uttarakhand', 'rajasthan']
  },
  origin: {
    type: String,
    required: [true, 'Origin is required']
  },
  duration: {
    type: String,
    required: [true, 'Duration is required']
  },
  destination: {
    type: String,
    required: [true, 'Destination is required']
  },
  vehicleType: {
    type: String,
    required: [true, 'Vehicle type is required'],
    enum: ['sedan', 'suv', 'tempo']
  },
  addOns: [{
    type: String
  }],

  // Pricing
  basePrice: {
    type: Number,
    required: [true, 'Base price is required'],
    min: [0, 'Price cannot be negative']
  },
  addOnPrice: {
    type: Number,
    default: 0,
    min: [0, 'Add-on price cannot be negative']
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
    min: [0, 'Total price cannot be negative']
  },

  // Payment Information
  payment: {
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending'
    },
    razorpayOrderId: {
      type: String,
      trim: true
    },
    razorpayPaymentId: {
      type: String,
      trim: true
    },
    razorpaySignature: {
      type: String,
      trim: true
    },
    amount: {
      type: Number,
      min: [0, 'Payment amount cannot be negative']
    },
    currency: {
      type: String,
      default: 'INR'
    },
    paymentDate: {
      type: Date
    },
    refundAmount: {
      type: Number,
      default: 0,
      min: [0, 'Refund amount cannot be negative']
    },
    refundDate: {
      type: Date
    },
    refundReason: {
      type: String,
      trim: true
    }
  },

  // Booking Status
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },

  // Travel Dates (optional)
  travelDate: {
    type: Date
  },
  returnDate: {
    type: Date
  },

  // Additional Information
  passengerCount: {
    type: Number,
    min: [1, 'At least 1 passenger required'],
    max: [12, 'Maximum 12 passengers allowed']
  },
  specialRequests: {
    type: String,
    trim: true,
    maxlength: [300, 'Special requests cannot exceed 300 characters']
  },

  // Timestamps
  bookingDate: {
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
bookingSchema.index({ email: 1, bookingDate: -1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ region: 1 });

// Virtual for formatted booking ID
bookingSchema.virtual('bookingId').get(function() {
  return `BK${this._id.toString().slice(-8).toUpperCase()}`;
});

// Method to get booking summary
bookingSchema.methods.getSummary = function() {
  return {
    _id: this._id,
    bookingId: this.bookingId,
    name: this.name,
    email: this.email,
    phone: this.phone,
    region: this.region,
    destination: this.destination,
    duration: this.duration,
    vehicleType: this.vehicleType,
    totalPrice: this.totalPrice,
    status: this.status,
    paymentStatus: this.payment.status,
    bookingDate: this.bookingDate
  };
};

// Pre-save middleware to update lastUpdated
bookingSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  next();
});

// Ensure virtual fields are serialized
bookingSchema.set('toJSON', { virtuals: true });
bookingSchema.set('toObject', { virtuals: true });

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;
