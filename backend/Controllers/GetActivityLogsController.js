const GetActivityLogsModel = require('../Model/GetActivityLogsModel');

const ActivityLogs = {
    getActivityLogs: (req, res) => {
        GetActivityLogsModel.getAllActivityLogs((err, results) => {
      if (err) {
        console.error('Error fetching adminactivity logs:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      res.status(200).json(results); // Send users data as JSON
    });
  },
};

module.exports = ActivityLogs;
