const { updateUserPassword } = require('../Model/SetNewPasswordModel');

const SetNewPasswordController = {
  setNewPassword: (req, res) => {
    const { email, newPassword, role } = req.body;
    updateUserPassword(email, newPassword, role, (err, message) => {
      if (err) {
        console.error('Error resetting password:', err);
        return res.status(500).send('Error resetting password');  // Send error response
      }
      console.log(message);
      return res.status(200).send(message);  // Send success response with message
    });
  }
};

module.exports = SetNewPasswordController;
