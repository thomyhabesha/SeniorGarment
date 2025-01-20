const garmentDefectsModel = require("../Model/GetGefectsModel");

const getAllDefects = (req, res) => {
  garmentDefectsModel.getAllDefects((err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch defects" });
    } else {
      res.json(results);
    }
  });
};



module.exports = {
  getAllDefects
};
