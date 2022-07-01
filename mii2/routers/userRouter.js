const express = require('express');
const router = express.Router();
const formValidation =  require('../validations/signupValidation') 
const controller = require('../controller/userController');

 
 
//post method
//signup form
router.post('/signup',formValidation.validationFuncation,controller.signUpform);

//login form
router.post('/login',controller.loginForm,controller.createAuthentication,controller.verifyAuthentication )

//change password
router.post('/changepassword',formValidation.cpasswordValidaion,controller.changePassword)

//forgot password
router.post('/forgotpassword',formValidation.forgotValidaion,controller.forgotPassword)


 
 

 
module.exports = router;