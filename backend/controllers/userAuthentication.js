// const Users = require("../models/users"); // Adjust the path as necessary
// async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await Users.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
