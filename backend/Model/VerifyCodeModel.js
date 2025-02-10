const connection = require('../Config/Db');

class VerifyCode {
  static async verifyCode(email, code) {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM users WHERE email = ? AND reset_code = ?',
        [email, code],
        (error, results) => {
          if (error) {
            console.error('Error verifying code:', error);
            reject('Error verifying code');
            return;
          }

          if (results.length > 0) {
            resolve('Code verified');
          } else {
            reject('Invalid code or email');
          }
        }
      );
    });
  }
}

module.exports = VerifyCode;
