const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  mechanic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mechanic',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative']
  },
  duration: {
    type: Number, // in hours
    min: [0.5, 'Minimum duration is 0.5 hours']
  },
  description: {
    type: String,
    maxlength: [200, 'Description too long']
  }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
