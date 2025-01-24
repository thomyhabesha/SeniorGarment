const db = require('../Config/Db');

const getResources = (callback) => {
  const query = 'SELECT r.*, s.suppliername FROM resources r JOIN supplier s ON s.supplierID= r.supplierID';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

module.exports = { getResources };
