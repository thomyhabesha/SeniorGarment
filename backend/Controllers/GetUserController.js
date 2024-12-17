const UserModel = require('../Model/GetUsersModel');

const UserController = {
  getUsers: (req, res) => {
    UserModel.getAllUsers((err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      res.status(200).json(results); // Send users data as JSON
    });
  },
};

module.exports = UserController;
