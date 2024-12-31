// models/ProductionSchedule.js
const db = require('../Config/Db'); // Import your database connection

// Fetch data from the database
const getProductionSchedule = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        t.task_id AS Task, 
        t.Priorty, 
        t.Task_name, 
        ps.startingTime, 
        ps.EndingTime, 
        tm.Team_name AS Team, 
        t.Task_Status
      FROM 
        Task t
      JOIN 
        productionschedule ps ON t.Task_id = ps.Task_id
      JOIN 
        teams tm ON t.TeamID = tm.TeamID
    `;
    db.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

module.exports = { getProductionSchedule };
