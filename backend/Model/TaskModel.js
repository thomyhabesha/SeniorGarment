// models/taskModel.js
const db = require('../Config/Db');

// Function to get task counts by priority
const getTaskCountsByPriority = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT Task_Status, COUNT(*) AS count
      FROM task
      GROUP BY Task_Status;
    `;
    db.query(query, (err, results) => {
      if (err) {
        reject(err); // Reject promise on error
      } 
      
      
       else {
        resolve(results); // Resolve promise with query results
      }
    });
  });
};

module.exports = { getTaskCountsByPriority };
