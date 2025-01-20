const GarmentDefect = require('../Model/GetSummaryModel');

const GarmentDefectController = {
    getSummary: (req, res) => {
      GarmentDefect.fetchUnrepairableDefects((err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Error fetching summary', error: err });
        }
  
        // Calculate total cost with correct property names
        const totalCost = results.reduce((sum, row) => {
          return sum + row.defectdquantity * row.CostPerQuantity; // Correct property names
        }, 0);
  
        res.status(200).json({ totalCost, details: results });
      });
    },
  };
  
  module.exports = GarmentDefectController;
  

module.exports = GarmentDefectController;
