const Users = require("../models/users");
async function findUsersByAddress(req, res) {
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
}
module.exports = { findUsersByAddress };
