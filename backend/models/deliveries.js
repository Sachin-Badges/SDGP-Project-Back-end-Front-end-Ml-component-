const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  delivery_person_age: {
    type: Number,
    required: true
  },
  delivery_person_rating: {
    type: Number,
    required: true
  },
  delivery_location_latitude: {
    type: Number,
    required: true
  },
  delivery_location_longitude: {
    type: Number,
    required: true
  },
  weather_conditions: {
    type: String,
    required: true
  },
  road_traffic_density: {
    type: String,
    required: true
  },
  vehicle_condition: {
    type: String,
    required: true
  },
  type_of_vehicle: {
    type: String,
    required: true
  },
  multiple_deliveries: {
    type: Boolean,
    required: true
  },
  festival: {
    type: String
  }
}, { timestamps: true }); // Add timestamps to automatically add createdAt and updatedAt

// Create the Delivery model
const Delivery = mongoose.model('Delivery', deliverySchema, 'deliveries');

module.exports = Delivery;
