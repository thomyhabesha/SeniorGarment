const express = require('express');
const router = express.Router();
const SupplierController = require('../Controllers/SupplierController');

router.get('/suppliers', SupplierController.getSupplier);

module.exports = router;
