const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/AddOrderController');

router.post('/Addorders', orderController.createOrder);

module.exports = router;
