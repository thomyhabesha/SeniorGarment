const express = require('express');
const router = express.Router();
const GarmentDefectController = require('../Controllers/GetSummaryConrtroller');

// Route for fetching the summary
router.get('/Defectsummary', GarmentDefectController.getSummary);

module.exports = router;
