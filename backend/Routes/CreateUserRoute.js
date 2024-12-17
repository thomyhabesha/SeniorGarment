const express = require('express');
const UserController = require('../Controllers/CreateUserCotroller');

const router = express.Router();

// POST route for user registration
router.post('/CreateUserRoute', UserController.registerUser);

module.exports = router;
