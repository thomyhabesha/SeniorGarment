const db = require('../Config/Db');

const TaskSchedule = {
  create: (data, callback) => {
    const { Task_name, Task_Description, Priorty, Task_Status, TeamID, StartDate, EndDate } = data;
const PRO_ManagerID=1;
    // First, insert the task into the Task table with current date and time
    const taskQuery = `
      INSERT INTO task (Task_name, Task_Description, TeamID, PRO_ManagerID, Priorty, Task_Status, CreatedAT) 
      VALUES (?, ?, ?, ?, ?, ?, NOW())
    `;
    db.query(taskQuery, [Task_name, Task_Description, TeamID, PRO_ManagerID, Priorty, Task_Status], (err, result) => {
      if (err) {
        return callback(err, null);
      }

      const TaskID = result.insertId; // Get the inserted Task's ID

      // Then, create a production schedule for the new task
      const scheduleQuery = `
        INSERT INTO productionschedule (Task_id, PRO_ManagerID, startingTime, EndingTime) 
        VALUES (?, ?, ?, ?)
      `;
      db.query(scheduleQuery, [TaskID, PRO_ManagerID, StartDate, EndDate], (err) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, { message: 'Task and production schedule created successfully' });
      });
    });
  },

  getTeams: (callback) => {
    const query = 'SELECT * FROM Teams';
    db.query(query, callback);
  },
};

module.exports = TaskSchedule;
