const db = require('../Config/Db');

const updateTaskDetails = (taskId, updatedData) => {
  return new Promise((resolve, reject) => {
    // Update Task table
    const updateTaskQuery = `
      UPDATE Task
      SET 
        Priorty = ?,
        Task_Status = ?
      WHERE 
        Task_id = ?`;

    const taskParams = [
      updatedData.Priorty,
      updatedData.Task_Status,
      taskId,
    ];

    db.query(updateTaskQuery, taskParams, (err, taskResults) => {
      if (err) return reject(err);

      // Update ProductionSchedule table
      const updateScheduleQuery = `
        UPDATE ProductionSchedule
        SET 
          startingTime = ?, 
          EndingTime = ?
        WHERE 
          task_id = ?`;

      const scheduleParams = [
        updatedData.startingTime,
        updatedData.EndingTime,
        taskId,
      ];

      db.query(updateScheduleQuery, scheduleParams, (err, scheduleResults) => {
        if (err) return reject(err);
        resolve({ taskResults, scheduleResults });
      });
    });
  });
};

module.exports = { updateTaskDetails };
