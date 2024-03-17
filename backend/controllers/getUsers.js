const Users = require("../models/users");

async function getAllUsersController(req, res) {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getAllUsersController };
