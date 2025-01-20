const db = require('../Config/Db'); // Database connection

const GarmentDefect = {
  fetchUnrepairableDefects: (callback) => {
    const query = `
      SELECT gd.defectdquantity, rs.CostPerQuantity
      FROM garment_defects gd
      JOIN resources rs
      ON rs.ResourcesID =  gd.ResourcesID
      WHERE gd.defect_type = 'unrepairable'
      AND MONTH(gd.reported_date) = MONTH(CURRENT_DATE())
      AND YEAR(gd.reported_date) = YEAR(CURRENT_DATE());
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
