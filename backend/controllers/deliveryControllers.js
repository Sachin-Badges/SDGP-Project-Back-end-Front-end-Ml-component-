const Delivery = require('../models/deliveries'); 
const axios = require('axios');
const DeliveryPrediction = require('../models/prediction'); 
const nodemailer = require('nodemailer');

const createDelivery = async (req, res) => {
    try {
        const {
            Delivery_person_Age,
            Delivery_person_Ratings,
            Post_office_latitude,
            Post_office_longitude,
            Delivery_location_latitude,
            Delivery_location_longitude,
            Weather_conditions,
            Road_traffic_density,
            Vehicle_condition,
            Type_of_vehicle,
            multiple_deliveries,
            Festival,
            distance
        } = req.body;

        // Set default values for Festival and distance if not provided
        const defaultFestival = 0;
        const defaultDistance = 0;

        // Convert multiple_deliveries to a number
        const encodedMultipleDeliveries = multiple_deliveries === 'true' ? 1 : 0;

        // Create a new delivery
        const newDelivery = new Delivery({
            Delivery_person_Age: parseFloat(Delivery_person_Age),
            Delivery_person_Ratings: parseFloat(Delivery_person_Ratings),
            Post_office_latitude: parseFloat(Post_office_latitude),
            Post_office_longitude: parseFloat(Post_office_longitude),
            Delivery_location_latitude: parseFloat(Delivery_location_latitude),
            Delivery_location_longitude: parseFloat(Delivery_location_longitude),
            Weather_conditions: parseFloat(Weather_conditions),
            Road_traffic_density: parseFloat(Road_traffic_density),
            Vehicle_condition: parseFloat(Vehicle_condition),
            Type_of_vehicle: parseFloat(Type_of_vehicle),
            multiple_deliveries: encodedMultipleDeliveries,
            Festival: parseFloat(Festival) || defaultFestival,
            distance: parseFloat(distance) || defaultDistance
        });

        // Save the new delivery
        await newDelivery.save();

        // Prepare data to send to Flask API
        const dataToSend = {
            Delivery_person_Age: parseFloat(Delivery_person_Age),
            Delivery_person_Ratings: parseFloat(Delivery_person_Ratings),
            Post_office_latitude: parseFloat(Post_office_latitude),
            Post_office_longitude: parseFloat(Post_office_longitude),
            Delivery_location_latitude: parseFloat(Delivery_location_latitude),
            Delivery_location_longitude: parseFloat(Delivery_location_longitude),
            Weather_conditions: parseFloat(Weather_conditions),
            Road_traffic_density: parseFloat(Road_traffic_density),
            Vehicle_condition: parseFloat(Vehicle_condition),
            Type_of_vehicle: parseFloat(Type_of_vehicle),
            multiple_deliveries: encodedMultipleDeliveries,
            Festival: parseFloat(Festival) || defaultFestival,
            distance: parseFloat(distance) || defaultDistance
        };

        // Send data to Flask API
        const flaskApiResponse = await axios.post('http://127.0.0.1:5001/predict', dataToSend);

        res.status(201).json({ message: 'Delivery registered successfully', delivery: newDelivery, flaskApiResponse: flaskApiResponse.data });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getPredictionsByEmail = async (req, res) => {
    try {
        const { email } = req.query;

        // Find predictions by email ID
        const predictions = await DeliveryPrediction.find({ email_id: email });

        if (predictions.length === 0) {
            return res.status(404).json({ message: 'No predictions found' });
        }

        res.status(200).json(predictions);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const createPrediction = async (req, res) => {
    try {

        const {
            email_id,
            sender_address,
            sender_name,
            delivery_person_name,
            delivery_person_contact,
            received_date,
            prediction_time
        } = req.body;

        // Your existing code to create a new prediction
        const newPrediction = new DeliveryPrediction({
            email_id,
            sender_address,
            sender_name,
            delivery_person_name,
            delivery_person_contact,
            received_date,
            prediction_time
        });
        await newPrediction.save();

        // Send email to the user
        const transporter = nodemailer.createTransport({
            // Your email configuration here
            service: 'gmail',
            auth: {
                user: 'dreamshadesnew@gmail.com',
                pass: 'cktshifncyllroyq'
            }
        });

        const mailOptions = {
            from: 'dreamshadesnew@gmail.com',
            to: email_id,
            subject: 'You have received an email',
            text: `Your Received Mail Data:\n
            Email ID: ${email_id}\n
            Sender Address: ${sender_address}\n
            Sender Name: ${sender_name}\n
            Delivery Person Name: ${delivery_person_name}\n
            Delivery Person Contact: ${delivery_person_contact}\n
            Received Date: ${received_date}\n
            Prediction Time: ${prediction_time}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(201).json({ message: 'Prediction created successfully', prediction: newPrediction });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getAllPredictions = async (req, res) => {
    try {
        // Find all predictions
        const predictions = await DeliveryPrediction.find();
        
        res.status(200).json({ predictions });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


module.exports = {
    createDelivery,
    createPrediction,
    getPredictionsByEmail,
    getAllPredictions
};
