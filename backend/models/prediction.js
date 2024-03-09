const mongoose = require('mongoose');

const deliveryPredictionSchema = new mongoose.Schema({
  email_id: {
    type: String,
    required: true,
  },
  sender_address: {
    type: String,
    required: true
  },
  sender_name: {
    type: String,
    required: true
  },
  delivery_person_name: {
    type: String,
    required: true
  },
  delivery_person_contact: {
    type: String,
    required: true
  },
  received_date: {
    type: String,
    required: true
  },
  prediction_time: {
    type: String,
    required: true
  }
}, { timestamps: true }); // Add timestamps to automatically add createdAt and updatedAt

const DeliveryPrediction = mongoose.model('DeliveryPrediction', deliveryPredictionSchema, 'deliveryPredictions');

module.exports = DeliveryPrediction;
