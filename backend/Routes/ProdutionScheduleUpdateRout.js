const express = require('express');
const router = express.Router();
const { editProductionSchedule } = require('../Controllers/ProducationScheduleUpdateController');

// PUT request to update task details
router.put('/production-scheduleUpdate/:id', editProductionSchedule);

module.exports = router;
