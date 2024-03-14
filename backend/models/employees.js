const mongoose = require("mongoose");

// Define the User schema with new fields
const employeeSchema = new mongoose.Schema(
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
    employeeId: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // Add timestamps to automatically add createdAt and updatedAt

// Create the User model
const Employees = mongoose.model("Employee", employeeSchema, "employees");

module.exports = Employees;
