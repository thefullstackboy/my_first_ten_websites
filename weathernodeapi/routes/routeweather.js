const express = require('express');
const router = express.Router();
const userController = require('../controller/weathercontroller')
 
router.get('/weatherapi', userController.weatherApi);
 

 
 
module.exports = router;