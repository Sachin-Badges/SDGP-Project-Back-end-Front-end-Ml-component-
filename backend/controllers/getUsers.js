// async function getAllUsersController(req, res) {
//     try {
//         const users = await Users.find();
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }

// module.exports = { getAllUsersController };
const Users = require("../models/users"); // Adjust the path as necessary

async function getAllUsersController(req, res) {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllUsersController };

