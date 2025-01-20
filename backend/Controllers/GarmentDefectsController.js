const GarmentDefect = require('../Model/GarmentDefectsModel');

const GarmentDefectsController = {
  createDefect: (req, res) => {
    const defectData = req.body;
    console.log(defectData.defectdquantity)
    GarmentDefect.createDefect(defectData, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error reporting defect', error: err });
      }
      res.status(200).json({ message: 'Defect reported successfully', result });
    });
  }
};

module.exports = GarmentDefectsController;
