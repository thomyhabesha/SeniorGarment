const express=require('express')
const router= express.Router();
const GetDefectsController = require('../Controllers/GetDefectsController');

router.get('/getdefects',GetDefectsController.getAllDefects);

module.exports=router