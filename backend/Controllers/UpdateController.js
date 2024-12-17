const userModel = require("../Model/UpdateUserModel");

// Fetch all users
const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// Update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    await userModel.updateUser(id, userData);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ message: "Failed to update user" });
  }
};



module.exports = {
  getUsers,
  updateUser,
  };
