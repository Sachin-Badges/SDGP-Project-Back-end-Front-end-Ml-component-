const bcrypt = require("bcrypt");
const Users = require("../models/users");

//user register
async function registerUser(req, res) {
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
}

module.exports = { registerUser };
