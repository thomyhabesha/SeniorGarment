// controllers/ResetPasswordController.js
const ResetPassword = require('../models/ResetPasswordModel');

exports.resetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const result = await ResetPassword.resetPassword(email);
    res.status(200).send(result);
  } catch (error) {
    if (error === 'Email does not exist') {
      res.status(404).send('Email does not exist');
    } else {
      res.status(500).send('Internal server error');
    }
  }
};
