const express = require('express');
const router = express.Router();
const { login } = require('../Controllers/UserController');  // Correct import

// POST route for login
router.post('/login', login);  // Pass the login function as a callback

module.exports = router;
