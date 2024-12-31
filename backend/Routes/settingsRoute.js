const express = require('express');
const router = express.Router();
const { updateUserSettings } = require('../Controllers/SettingsController');

// Route to update admin settings
router.put('/updateSettings', updateUserSettings);

module.exports = router;
