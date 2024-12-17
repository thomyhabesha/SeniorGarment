// UserController.js
const { authenticateUserByRole } = require('../Model/Usermodel');

const login = (req, res) => {
  const { role, username, password } = req.body;

  console.log("Found user, comparing passwords...");
  authenticateUserByRole(role, username, password, (err, user) => {
    if (err) {
      return res.status(400).json({ message: err });
    }

    if (user) {
      res.status(200).json({user,message:'success'});
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
};

module.exports = { login };
