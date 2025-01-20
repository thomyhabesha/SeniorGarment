const db = require('../Config/Db'); // Assuming your db connection is in config/db.js
const GarmentDefect = {
  createDefect: (defectData, callback) => {
    const reported_date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format for MySQL
    let { ResourcesID, defect_type, resStatus, supplier_id, return_status, notes, defectdquantity, replacement_received } = defectData;
    


    // Ensure supplier_id is a number
    const numericSupplierId = parseInt(supplier_id, 10);
    if (isNaN(numericSupplierId)) {
      return callback(new Error('Invalid supplier ID.'));
    }


    // Ensure defectdquantity has a value
    defectdquantity = defectdquantity || 0; // Default to 0 if undefined

    const query = `
      INSERT INTO garment_defects 
      (ResourcesID, defect_type, reported_date, resStatus, supplier_id, return_status, replacement_received, notes, defectdquantity) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
      query,
      [ResourcesID, defect_type, reported_date, resStatus, numericSupplierId, return_status, replacement_received, notes, defectdquantity],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        callback(null, result);
      }
    );
  },
};

module.exports = GarmentDefect;
