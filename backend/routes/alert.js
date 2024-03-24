var express = require("express");
var router = express.Router();
const emailService = require("../services/emailService");

router.post("/", emailService);

module.exports = router;
