const Delivery = require("../models/deliveries");

const DeliveryPrediction = require("../models/prediction");
const nodemailer = require("nodemailer");

const createDelivery = async (req, res) => {
  try {
    const {
      delivery_person_age,
      delivery_person_rating,
      delivery_location_latitude,
      delivery_location_longitude,
      weather_conditions,
      road_traffic_density,
      vehicle_condition,
      type_of_vehicle,
      multiple_deliveries,
      festival,
    } = req.body;

    // Create a new delivery
    const newDelivery = new Delivery({
      delivery_person_age,
      delivery_person_rating,
      delivery_location_latitude,
      delivery_location_longitude,
      weather_conditions,
      road_traffic_density,
      vehicle_condition,
      type_of_vehicle,
      multiple_deliveries,
      festival,
    });

    // Save the new delivery
    await newDelivery.save();

    res
      .status(201)
      .json({
        message: "Delivery registered successfully",
        delivery: newDelivery,
      });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getPredictionsByEmail = async (req, res) => {
  try {
    const { email } = req.query;

    // Find predictions by email ID
    const predictions = await DeliveryPrediction.find({ email_id: email });

    if (predictions.length === 0) {
      return res.status(404).json({ message: "No predictions found" });
    }

    res.status(200).json(predictions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
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
      prediction_time,
    } = req.body;

    // Your existing code to create a new prediction
    const newPrediction = new DeliveryPrediction({
      email_id,
      sender_address,
      sender_name,
      delivery_person_name,
      delivery_person_contact,
      received_date,
      prediction_time,
    });
    await newPrediction.save();

    // Send email to the user
    const transporter = nodemailer.createTransport({
      // Your email configuration here
      service: "gmail",
      auth: {
        user: "sachinayeshmantha@gmail.com",
        pass: "bhhnnylujchbqjdf",
      },
    });

    const mailOptions = {
      from: "dreamshadesnew@gmail.com",
      to: email_id,
      subject: "Your data added successfully",
      text: `Your prediction data:\n
            Email ID: ${email_id}\n
            Sender Address: ${sender_address}\n
            Sender Name: ${sender_name}\n
            Delivery Person Name: ${delivery_person_name}\n
            Delivery Person Contact: ${delivery_person_contact}\n
            Received Date: ${received_date}\n
            Prediction Time: ${prediction_time}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res
      .status(201)
      .json({
        message: "Prediction created successfully",
        prediction: newPrediction,
      });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllPredictions = async (req, res) => {
  try {
    // Find all predictions
    const predictions = await DeliveryPrediction.find();

    res.status(200).json({ predictions });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createDelivery,
  createPrediction,
  getPredictionsByEmail,
  getAllPredictions,
};
