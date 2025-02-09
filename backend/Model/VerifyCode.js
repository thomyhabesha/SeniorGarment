const { promisePool } = require('../config/db');

class VerifyCode {
  static async verifyCode(email, code) {
    try {
      const [rows] = await promisePool.query('SELECT * FROM user_account WHERE email = ? AND reset_code = ?', [email, code]);
      if (rows.length > 0) {
        return 'Code verified';
      } else {
        throw new Error('Invalid code or email');
      }
    } catch (error) {
      console.error('Error verifying code:', error.message);
      throw new Error('Error verifying code');
    }
  }
}

module.exports = VerifyCode;
