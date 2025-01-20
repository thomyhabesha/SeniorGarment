const SupplierModel = require('..//Model/SupplierModel');

const getSupplier = (req, res) => {
  SupplierModel.getSupplier((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch SupplierModel' });
    }
    res.status(200).json(results);
  });
};

module.exports = { getSupplier };
