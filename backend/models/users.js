const mongoose = require("mongoose");

// Define the User schema with new fields
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // Add timestamps to automatically add createdAt and updatedAt

// Create the User model
const Users = mongoose.model("User", userSchema, "users");

module.exports = Users;
