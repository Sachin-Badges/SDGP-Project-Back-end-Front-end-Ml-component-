// Import Mongoose
const mongoose = require('mongoose');

// Define the Feedback schema
const feedbackSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  opinion: {
    type: String,
    required: true
  },
}, { timestamps: true }); 


const Feedback = mongoose.model('Feedback', feedbackSchema, 'feedbacks1');

module.exports = Feedback;
