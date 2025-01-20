const db = require('../Config/Db');

const getSupplier = (callback) => {
  const query = 'SELECT * FROM supplier';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

module.exports = { getSupplier };
