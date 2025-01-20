const db = require('../Config/Db');

const getResources = (callback) => {
  const query = 'SELECT * FROM resources';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

module.exports = { getResources };
