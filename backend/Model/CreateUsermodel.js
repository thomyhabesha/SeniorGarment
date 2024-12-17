const db = require('../Config/Db'); // MySQL connection setup file

const UserModel = {
  // Add a new user to the database
  addUser: (userData, callback) => {
    const query = `
      INSERT INTO users (Fname, Lname, email, department, user_role,  contact_no)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const { Fname, Lname, email, department, user_role, contact_no  } = userData;

    db.query(query, [Fname, Lname, email, department, user_role, contact_no], callback);
  },
};

module.exports = UserModel;
