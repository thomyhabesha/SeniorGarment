// controllers/SetNewPasswordController.js
const { updateUserPassword } = require('../Model/SetNewPasswordModel');

exports.setNewPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    await updateUserPassword(email, newPassword);
    res.status(200).send('Password reset successful');
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).send('Error resetting password');
  }
};
