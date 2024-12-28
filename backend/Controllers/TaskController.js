// controllers/taskController.js
const taskModel = require('../Model/TaskModel');

// Controller function to handle the task counts request
const getTaskCounts = async (req, res) => {
  try {
    const taskCounts = await taskModel.getTaskCountsByPriority();
    res.json(taskCounts);  // Send the task counts to the frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getTaskCounts };
