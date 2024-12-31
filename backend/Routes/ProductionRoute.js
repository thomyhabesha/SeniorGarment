// routes/productionSchedule.js
const express = require('express');
const router = express.Router();
const { fetchProductionSchedule } = require('../Controllers/ProductionSceduleController');

router.get('/production-schedule', fetchProductionSchedule);

module.exports = router;
