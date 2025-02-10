const db = require('../Config/Db'); // MySQL connection setup file

const GetActivityLogsModel = {
    getAllActivityLogs: (callback) => {
    const query = 'SELECT * FROM adminactivitylogs';
    db.query(query, callback);
  },
};

module.exports = GetActivityLogsModel;
