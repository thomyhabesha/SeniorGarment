const express = require("express");
const router = express.Router();
const resourceController = require("../Controllers/GetResourceCountController");

router.get("/resources/stats", resourceController.getResourceStats);

module.exports = router;
