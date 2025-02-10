const express = require('express');
const ActivityLogs = require('../Controllers/GetActivityLogsController');

const router = express.Router();

// Route to fetch all users
router.get('/getActivitylogs', ActivityLogs.getActivityLogs);

module.exports = router;
