const connection = require('../Config/Db'); // Import the connection from db.js

const getAllTasks = async () => {
  const query = `
    SELECT 
      t.Task_id,
      t.Task_name AS task_name, 
      t.Task_Description, 
      t.Task_Status, 
      ps.startingTime, 
      ps.EndingTime, 
      tm.Team_name AS team_name,
      rs.ResourcesName
    FROM 
      task t
    JOIN 
      productionschedule ps ON t.task_id = ps.task_id
    JOIN 
      teams tm ON t.teamID = tm.teamID
    JOIN 
      workflowresources wr ON t.task_id = wr.task_id
    JOIN 
      resources rs ON rs.ResourcesID = wr.ResourcesID
    

  `;

  return new Promise((resolve, reject) => {
    connection.query(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        console.log('Raw Query Results:', rows); // Debugging: Log the raw query results

        const tasks = [];

        rows.forEach(row => {
          // Check if task already exists in tasks array
          let task = tasks.find(t => t.Task_id === row.Task_id);
          
          // If task doesn't exist, create a new task object
          if (!task) {
            task = {
              Task_id: row.Task_id,
              task_name: row.task_name,
              Task_Description: row.Task_Description,
              Task_Status: row.Task_Status,
              startingTime: row.startingTime,
              EndingTime: row.EndingTime,
              team_name: row.team_name,
              resources: [] // Initialize resources array
            };
            tasks.push(task);
          }
          
          // Add the resource to the task's resources array (if not already present)
          if (!task.resources.includes(row.ResourcesName)) {
            task.resources.push(row.ResourcesName);
          }
        });

        console.log('Grouped Tasks:', tasks); // Debugging: Log the grouped tasks
        resolve(tasks);
      }
    });
  });
};

module.exports = { getAllTasks };
