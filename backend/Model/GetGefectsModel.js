const db = require("../Config/Db");

const getAllDefects = (callback) => {
  const query = "SELECT r.ResourcesName ,g.defectdquantity, g.defect_id, g.defect_type, g.notes, g.replacement_received, g.reported_date, g.resStatus, g.return_status, s.suppliername FROM garment_defects g JOIN supplier s ON s.supplierID=g.supplier_id JOIN resources r ON r.ResourcesID= g.ResourcesID ";
  db.query(query, callback);
};


module.exports = {
  getAllDefects
};
