const db = require('../Config/Db');

const Order = {
  create: (name, quantity, category, callback) => {
    const query = 'INSERT INTO orders (name, quantity, category) VALUES (?, ?, ?)';
    db.query(query, [name, quantity, category], callback);
  }
};

module.exports = Order;
