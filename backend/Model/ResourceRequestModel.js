const db = require('../Config/Db');

const ResourcesModel = {
  requestResource: (arrivalDate, quantity, ResourcesID) => {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO resourcestracking (ResourcesID, quantity, arrivalDate, arrived )
        VALUES (?, ?, ?, 'waiting');
      `;
      db.query(query, [ResourcesID, quantity, arrivalDate ], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
};

module.exports = ResourcesModel;
