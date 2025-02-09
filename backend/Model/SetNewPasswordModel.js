const db = require('../Config/Db');
const bcrypt = require('bcrypt');

async function updateUserPassword(email, newPassword, user) {
  try {
    db.query('SELECT UserID FROM users WHERE email = ?', [email], async (err, userResults) => {
      if (err) {
        throw err;
      }
      if (userResults.length === 0) {
        throw new Error('Email not found');
      }

      const userId = userResults[0].UserID;
      const query = `SELECT UserID FROM ${user} WHERE UserID = ?`;

      db.query(query, [userId], async (err, results) => {
        if (err) {
          throw err;
        }
        if (results.length === 0) {
          throw new Error('User is not found in the given table');
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const updateQuery = `UPDATE ${user} SET password_hash = ? WHERE UserID = ?`;
        db.query(updateQuery, [hashedPassword, userId], (err, updateResults) => {
          if (err) {
            throw err;
          }
          console.log('Password updated successfully');
        });
      });
    });
  } catch (error) {
    console.error('Error updating password:', error);
    throw error;
  }
}

module.exports = { updateUserPassword };
