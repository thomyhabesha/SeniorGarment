// controllers/resourceController.js
const resourceModel = require('../Model/UpdateRecourcesStockModel');

const updateResource = async (req, res) => {
  const { ResourcesID, arrivalStatus, quantity } = req.body;

  try {
    // Call the model to update both tables in a transaction
    await resourceModel.updateResource(ResourcesID, arrivalStatus, quantity);
    return res.status(200).json({ message: 'Resource updated successfully!' });
  } catch (error) {
    console.error('Error updating resource:', error);
    return res.status(500).json({ message: 'Error updating resource' });
  }
};

module.exports = {
  updateResource,
};
