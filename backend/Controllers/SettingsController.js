const db = require('../Config/Db');
const bcrypt = require('bcrypt');

// Update admin account information
const updateAdminSettings = async (req, res) => {
  const { username, newUsername, oldPassword, newPassword } = req.body;

  try {
    // Check if the old password matches the current one
    const [admin] = await db.promise().query("SELECT * FROM admin WHERE username = ?", [username]);

    if (admin.length === 0) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const match = await bcrypt.compare(oldPassword, admin[0].password_hash);
    if (!match) {
      return res.status(400).json({ message: "Incorrect old password" });
    }

    // Hash the new password if provided
    let hashedPassword = oldPassword;
    if (newPassword) {
      hashedPassword = await bcrypt.hash(newPassword, 10);
    }

    // Update the admin details
    const query = `
      UPDATE admin
      SET username = ?, password_hash = ? 
      WHERE username = ?;
    `;
    await db.promise().query(query, [newUsername || username, hashedPassword, username]);

    return res.status(200).json({ message: "Admin settings updated successfully" });
  } catch (error) {
    console.error('Error updating admin settings:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  updateAdminSettings,
};
