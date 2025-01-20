const db = require('../Config/Db'); // Database connection

const GarmentDefect = {
  fetchUnrepairableDefects: (callback) => {
    const query = `
      SELECT gd.defectdquantity, rt.Cost 
      FROM garment_defects gd
      JOIN resourcestracking rt ON gd.ResourcesID = rt.ResourcesID
      WHERE gd.defect_type = 'unrepairable';
    `;
    

    db.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },
};

module.exports = GarmentDefect;
