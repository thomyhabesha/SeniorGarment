// routes/resetPassword.js
const express = require('express');
const router = express.Router();
const ResetPasswordController = require('../Controllers/ResetPsswordController');

router.post('/resetPassword', ResetPasswordController.resetPassword);

module.exports = router;
