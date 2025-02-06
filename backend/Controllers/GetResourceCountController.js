const Resource = require("../Model/GetResourceCountModel");

exports.getResourceStats = (req, res) => {
  Resource.getCount((err, results) => {
    if (err) {
      console.error("Error fetching resource counts:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json(results[0]); // Return first row with counts
  });
};
