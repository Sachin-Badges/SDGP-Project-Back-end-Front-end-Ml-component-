var express = require("express");
var router = express.Router();
const userController = require("../controllers/userControllers");

// user routes
router.get("/", userController.getAllUsers);
router.get("/search/address", userController.findUsersByAddress);
router.get("/searchByEmail", userController.getUserByEmail);
router.get("/test", userController.testEndpoint);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

module.exports = router;
