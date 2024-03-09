var express = require('express');
var router = express.Router();
const deliveryController = require('../controllers/deliveryControllers');

// user routes
router.post('/create', deliveryController.createDelivery);
router.post('/createPrediction', deliveryController.createPrediction);
router.get('/search', deliveryController.getPredictionsByEmail);
router.get('/all', deliveryController.getAllPredictions);

module.exports = router;