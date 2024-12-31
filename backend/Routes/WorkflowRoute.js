const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/WorkflowControllers');

router.get('/Workflowtasks', taskController.getTasks);

module.exports = router;
