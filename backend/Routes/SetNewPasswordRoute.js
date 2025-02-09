// routes/setNewPassword.js
const express = require('express');
const router = express.Router();
const SetNewPasswordController = require('../Controllers/SetNewPasswordController');

router.post('/resetUserPassword', SetNewPasswordController.setNewPassword);

module.exports = router;
