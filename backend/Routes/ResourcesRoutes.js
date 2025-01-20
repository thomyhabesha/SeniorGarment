const express = require('express');
const router = express.Router();
const resourceController = require('../Controllers/ResourcesController');

router.get('/resources', resourceController.getResources);

module.exports = router;
