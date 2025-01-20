const express = require('express');
const router = express.Router();
const GarmentDefectsController = require('../Controllers/GarmentDefectsController');

router.post('/garment_defects', GarmentDefectsController.createDefect);

module.exports = router;
