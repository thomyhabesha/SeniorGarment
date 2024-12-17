const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UpdateController");

// Fetch all users
router.get("/getusers", userController.getUsers);

// Update user
router.put("/updateuser/:id", userController.updateUser);


module.exports = router;
