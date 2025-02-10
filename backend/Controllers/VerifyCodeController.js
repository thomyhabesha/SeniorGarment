const VerifyCode = require('../Model/VerifyCodeModel');

const VerifyCodeController = {
  async verifyCode(req, res) {
    const { email, code } = req.body;
    try {
      const message = await VerifyCode.verifyCode(email, code);
      res.status(200).json({ message });
    } catch (error) {
      console.error('Error verifying code:', error);
      if (error === 'Invalid code or email') {
        res.status(400).json({ error: 'Invalid code or email' });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
};

module.exports = VerifyCodeController;
