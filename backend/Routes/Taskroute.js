// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/TaskController');

// Route to get task counts by priority
router.get('/task-counts', taskController.getTaskCounts);

module.exports = router;
