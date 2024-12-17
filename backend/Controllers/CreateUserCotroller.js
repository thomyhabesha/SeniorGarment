const UserModel = require('../Model/CreateUsermodel');

const UserController = {
  // Register a new user
  registerUser: (req, res) => {
    const { Fname, Lname, email, department, user_role, contact_no } = req.body;

    // Input validation
    if (!Fname || !Lname || !email || !department || !user_role || !contact_no) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Insert user into the database
    UserModel.addUser({ Fname, Lname, email, department, user_role, contact_no }, (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    });
  },
};

module.exports = UserController;
