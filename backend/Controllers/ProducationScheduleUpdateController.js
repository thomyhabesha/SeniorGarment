const { updateTaskDetails } = require('../Model/ProductionSceduleUpdate');

const editProductionSchedule = async (req, res) => {
  const taskId = req.params.id; // task_id as the primary key
  const updatedData = req.body;

  try {
    await updateTaskDetails(taskId, updatedData);
    res.json({ message: 'Task updated successfully' });
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ error: 'Failed to update task' });
  }
};

module.exports = { editProductionSchedule };
