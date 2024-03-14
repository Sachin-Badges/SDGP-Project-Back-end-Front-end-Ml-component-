var express = require("express");
var router = express.Router();
const employeeController = require("../controllers/employeeControllers");

// user routes
router.get("/", employeeController.getAllEmployees);
router.get("/search", employeeController.findEmployeeByEmployeeId);
router.get("/test", employeeController.testEndpoint);
router.post("/register", employeeController.registerEmployee);
router.post("/login", employeeController.loginEmployee);

module.exports = router;
