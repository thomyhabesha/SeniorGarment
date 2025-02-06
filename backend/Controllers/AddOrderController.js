const Order = require('../Model/AddOrderModel');

exports.createOrder = (req, res) => {
  const { name, quantity, category } = req.body;

  if (!name || !quantity || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  Order.create(name, quantity, category, (err, result) => {
    if (err) {
      console.error("Error inserting order:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "Order created successfully", orderId: result.insertId });
  });
};
