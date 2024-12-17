const express = require('express');
const router = express.Router();
const { updateAdminSettings } = require('../Controllers/SettingsController');

// Route to update admin settings
router.put('/updateSettings', updateAdminSettings);

module.exports = router;
