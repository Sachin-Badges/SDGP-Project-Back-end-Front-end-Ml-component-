const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    Delivery_person_Age: {
        type: Number,
        required: true
    },
    Delivery_person_Ratings: {
        type: Number,
        required: true
    },
    Post_office_latitude: {
        type: Number,
        required: true
    },
    Post_office_longitude: {
        type: Number,
        required: true
    },
    Delivery_location_latitude: {
        type: Number,
        required: true
    },
    Delivery_location_longitude: {
        type: Number,
        required: true
    },
    Weather_conditions: {
        type: Number,
        required: true
    },
    Road_traffic_density: {
        type: Number,
        required: true
    },
    Vehicle_condition: {
        type: Number,
        required: true
    },
    Type_of_vehicle: {
        type: Number,
        required: true
    },
    multiple_deliveries: {
        type: Number,
        required: true
    },
    Festival: {
        type: Number,
        default: 0 // Default value for Festival if not provided
    },
    distance: {
        type: Number,
        default: 0 // Default value for distance if not provided
    }
}, { timestamps: true });

// Create the Delivery model with custom table name "delivery_table"
const Delivery = mongoose.model('Delivery', deliverySchema, 'delivery_table');

module.exports = Delivery;
