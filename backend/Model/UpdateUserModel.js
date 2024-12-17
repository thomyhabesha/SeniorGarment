const db = require("../Config/Db");

// Fetch all users
const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (err, rows) => {
      if (err) {
        reject(new Error("Error fetching users: " + err.message));
      } else {
        resolve(rows);
      }
    });
  });
};

// Update user by ID
const updateUser = async (id, userData) => {
  const { Fname, Lname, user_role, status } = userData;
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE users SET Fname = ?, Lname = ?, user_role = ?, status = ? WHERE UserID = ?",
      [Fname, Lname, user_role, status, id],
      (err, result) => {
        if (err) {
          reject(new Error("Error updating user: " + err.message));
        } else {
          resolve(result);
        }
      }
    );
  });
};

  

module.exports = {
  getAllUsers,
  updateUser,
  
};
