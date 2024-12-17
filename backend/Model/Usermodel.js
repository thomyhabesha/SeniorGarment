const bcrypt = require('bcrypt');
const db = require('../Config/Db');

// Function to authenticate a user by role (admin, production manager, or inventory manager)
const authenticateUserByRole = (role, username, password, callback) => {
  // Define query based on role
  let query = '';
  
  if (role === 'admin') {
    query = 'SELECT u.Fname, u.Lname, u.email,u.user_role, a.password_hash FROM USERS u JOIN admin a ON u.userID = a.userID WHERE a.username = ?';
  } else if (role === 'productionmanager') {
    query = 'SELECT u.Fname, u.Lname, u.email,u.user_role, p.password_hash FROM USERS u JOIN productionmanager p ON u.userID = p.userID WHERE p.username = ?';
  } else if (role === 'inventorymanager') {
    query = 'SELECT u.Fname, u.Lname, u.email,u.user_role, i.password_hash FROM USERS u JOIN inventorymanager i ON u.userID = i.userID WHERE i.username = ?';
  } else {
    return callback('Invalid role', null); // Handle invalid role
  }

  // Run the query
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error("Error during authentication:", err);
      return callback(err, null);
    } else {
      if (results.length > 0) {
        // Compare the entered password with the stored hashed password
        bcrypt.compare(password, results[0].password_hash, (err, isMatch) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            return callback(err, null);
          } else if (isMatch) {
            console.log("Password match successful!");
            const { Fname, Lname, email,user_role } = results[0];
            console.log("Fname:", Fname);
            console.log("Lname:", Lname);
            console.log("email:", email);
            callback(null, { Fname, Lname, email,user_role });  // Return user data
          } else {
            console.log("Password does not match.");
            callback('Password mismatch', null);  // Return error if password doesn't match
          }
        });
      } else {
        console.log("No user found with that username.");
        callback('User not found', null);  // Return error if no user is found
      }
    }
  });
};

module.exports = { authenticateUserByRole };
