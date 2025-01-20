// models/resourceModel.js
const db = require('../Config/Db'); // Using the callback-based connection

// Helper function to wrap db.query in a Promise
const queryAsync = (query, values) => {
  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) {
        reject(err); // Reject promise if error occurs
      } else {
        resolve(results); // Resolve promise if query is successful
      }
    });
  });
};

const updateResource = async (ResourcesID, arrivalStatus, quantity) => {
  try {
    // Start a transaction to ensure atomicity
    await queryAsync('START TRANSACTION', []);

    // Update the quantity in the resources table
    const updateResourceQuery = 'UPDATE resources SET quantity = ? WHERE ResourcesID = ?';
    await queryAsync(updateResourceQuery, [quantity, ResourcesID]);

    // Update the arrival status in the resourcesTracking table
    const updateTrackingQuery = 'UPDATE resourcesTracking SET arrived = ? WHERE ResourcesID = ?';
    await queryAsync(updateTrackingQuery, [arrivalStatus, ResourcesID]);

    // Commit the transaction
    await queryAsync('COMMIT', []);
  } catch (error) {
    // If any error occurs, roll back the transaction
    await queryAsync('ROLLBACK', []);
    throw error;
  }
};

module.exports = {
  updateResource,
};
