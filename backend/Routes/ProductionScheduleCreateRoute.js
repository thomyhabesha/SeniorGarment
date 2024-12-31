const express = require('express');
const router = express.Router();
const TaskScheduleController = require('../Controllers/ProductionScheduleCreateController');

// Route for getting the list of teams
router.get('/teams', TaskScheduleController.getTeams);

// Route for creating a task and production schedule
router.post('/create-task-schedule', TaskScheduleController.createTaskSchedule);

module.exports = router;
