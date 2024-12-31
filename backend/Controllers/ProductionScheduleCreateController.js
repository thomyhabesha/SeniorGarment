const TaskSchedule = require('../Model/ProductionScheduleCreateModel');

const TaskScheduleController = {
  createTaskSchedule: (req, res) => {
    const { Task_name,Task_Description, Priorty, Task_Status, TeamID, StartDate, EndDate } = req.body;

    TaskSchedule.create(
      { Task_name,Task_Description, Priorty, Task_Status, TeamID, StartDate, EndDate},
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating task and production schedule', error: err });
        }
        res.status(200).json(result);
      }
    );
  },

  getTeams: (req, res) => {
    TaskSchedule.getTeams((err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching teams', error: err });
      }
      res.status(200).json(result); // Send the list of teams to the client
    });
  },
};

module.exports = TaskScheduleController;
