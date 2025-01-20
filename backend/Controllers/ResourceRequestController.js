const ResourcesModel = require('../Model/ResourceRequestModel');

const ResourcesController = {
  requestResource: async (req, res) => {
    const { arrivalDate, quantity, ResourcesID } = req.body;

    try {
      const result = await ResourcesModel.requestResource(arrivalDate, quantity, ResourcesID);
      res.status(200).json({ message: 'Request submitted successfully', data: result });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting request', error });
    }
  },
};

module.exports = ResourcesController;
