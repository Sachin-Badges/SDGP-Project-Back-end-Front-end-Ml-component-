const Users = require("../models/users");
const bcrypt = require("bcryptjs");

//user register
const registerUser = async (req, res) => {
  try {
    const { email, password, address, mobile, latitude, longitude } = req.body;

    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new Users({
      email,
      password: hashedPassword,
      address,
      mobile,
      latitude,
      longitude,
    });

    // Save the new user
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
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
const findUsersByAddress = async (req, res) => {
  try {
    const { address } = req.query; // Get the address from query parameters

    // Search for users with an address that matches the search criteria
    const users = await Users.find({
      address: new RegExp(address, "i"), // Using RegExp for case-insensitive search
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // Respond with the list of found users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;

    // Find predictions by email ID
    const userDetails = await Users.find({ email: email });

    if (userDetails.length === 0) {
      return res.status(404).json({ message: "No User found" });
    }

    res.status(200).json(userDetails);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  testEndpoint,
  findUsersByAddress,
  registerUser,
  loginUser,
  getUserByEmail,
};
