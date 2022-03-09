const express = require('express');
const router = express.Router();
const userController = require('../controller/bitcoincontroller')
 
router.get('/bitcoinapi', userController.bitcoinApi);
 
 
 
 
module.exports = router;