// controllers/VerifyCodeController.js

const VerifyCode = require('../models/VerifyCode');

const VerifyCodeController = {
  async verifyCode(req, res) {
    const { email, code } = req.body;
    try {
      const message = await VerifyCode.verifyCode(email, code);
      res.status(200).json({ message });
    } catch (error) {
      console.error('Error verifying code:', error.message);
      if (error.message === 'Invalid code') {
        res.status(400).json({ error: 'Invalid code' });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
};

module.exports = VerifyCodeController;

