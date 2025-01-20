// routes/resourceRoutes.js
const express = require('express');
const router = express.Router();
const resourceController = require('../Controllers/UpdateResourceStockContoller');

// POST route to update resource
router.post('/updateResourcestock', resourceController.updateResource);

module.exports = router;
