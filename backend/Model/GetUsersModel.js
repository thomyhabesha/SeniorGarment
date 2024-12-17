const db = require('../Config/Db'); // MySQL connection setup file

const UserModel = {
  getAllUsers: (callback) => {
    const query = 'SELECT UserID, Fname,Lname, email, user_role, contact_no, status FROM users';
    db.query(query, callback);
  },
};

module.exports = UserModel;
