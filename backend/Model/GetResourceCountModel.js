const db = require("../Config/Db");

const Resource = {
  getCount: (callback) => {
    const query = `
      SELECT 
        (SELECT COUNT(*) FROM resources) AS total_count,
        (SELECT COUNT(*) FROM resources WHERE quantity < 10) AS low_stock_count,
        (SELECT COUNT(*) FROM resources WHERE quantity = 0) AS out_of_stock_count
    `;
    db.query(query, callback);
  }
};

module.exports = Resource;
