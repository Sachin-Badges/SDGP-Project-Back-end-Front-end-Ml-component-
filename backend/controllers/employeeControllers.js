const Employees = require("../models/employees");
const bcrypt = require("bcryptjs");

//user register
const registerEmployee = async (req, res) => {
  try {
    const { email, password, employeeId, mobile } = req.body;

    // Check if user already exists
    const existingUser = await Employees.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Employee already exists" });
    }

    // Validate the employeeId format
    const employeeIdRegex = /^w\d{7}$/;
    if (!employeeIdRegex.test(employeeId)) {
      return res.status(400).json({ message: "Invalid employeeId format" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newEmployee = new Employees({
      email,
      password: hashedPassword,
      employeeId,
      mobile,
    });

    // Save the new user
    await newEmployee.save();

    res.status(201).json({
      message: "Employee registered successfully",
      employee: newEmployee,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all users
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const testEndpoint = async (req, res) => {
  try {
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// User Search by Address
const findEmployeeByEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.query; // Get the address from query parameters

    // Search for users with an address that matches the search criteria
    const employees = await Employees.find({
      employeeId: new RegExp(employeeId, "i"), // Using RegExp for case-insensitive search
    });

    if (employees.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // Respond with the list of found users
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = await Employees.findOne({ email });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const passwordMatch = await bcrypt.compare(password, employee.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", employee });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllEmployees,
  testEndpoint,
  findEmployeeByEmployeeId,
  registerEmployee,
  loginEmployee,
};
