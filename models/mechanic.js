const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Mechanic name is required'],
    trim: true
  },
  location: { 
    type: String, 
    required: [true, 'Location is required'],
    enum: ['Blantyre', 'Lilongwe', 'Mzuzu', 'Zomba']
  },
  specialty: { 
    type: String, 
    required: [true, 'Specialty is required'],
    enum: ['Engine', 'Transmission', 'Brakes', 'Electrical']
  },
  contact: { 
    type: String, 
    required: [true, 'Contact is required'],
    validate: {
      validator: v => /^\+265\d{9}$/.test(v),
      message: 'Invalid Malawi phone number format'
    }
  },
  rating: { 
    type: Number, 
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5'],
    default: 3
  },
  available: {
    type: Boolean,
    default: true
  },
  servicesOffered: [{
    type: String,
    enum: ['Oil Change', 'Tire Rotation', 'Diagnostics', 'Tune-up']
  }],
  hourlyRate: {
    type: Number,
    min: [0, 'Rate cannot be negative']
  }
}, { timestamps: true });

module.exports = mongoose.model('Mechanic', mechanicSchema);
