const express = require('express');
const router = express.Router();
const ResourcesController = require('../Controllers/ResourceRequestController');

router.post('/requestResource', ResourcesController.requestResource);

module.exports = router;
