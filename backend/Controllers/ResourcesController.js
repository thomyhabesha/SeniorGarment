const Resource = require('..//Model/ResourcesModel');

const getResources = (req, res) => {
  Resource.getResources((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch resources' });
    }
    res.status(200).json(results);
  });
};

module.exports = { getResources };
