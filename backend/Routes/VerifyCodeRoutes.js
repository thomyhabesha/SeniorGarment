// routes/verifyCode.js
const express = require('express');
const router = express.Router();
const VerifyCodeController = require('../Controllers/VerifyCodeController');

// Define the post route for verifying the code
router.post('/verify', VerifyCodeController.verifyCode);

module.exports = router;
