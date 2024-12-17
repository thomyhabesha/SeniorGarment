const express = require('express');
const UserController = require('../Controllers/GetUserController');

const router = express.Router();

// Route to fetch all users
router.get('/getusers', UserController.getUsers);

module.exports = router;
