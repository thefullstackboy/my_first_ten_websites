const joi = require('joi');
const { joiPassword } = require('joi-password');
const errors = require('restify-errors');

 
const validationFuncation = (req,res,next) => {
 
   const schema = joi. object().keys({    
    firstName: joi.string().min(4).max(16).required(),
    lastName: joi.string().min(4).max(16).required(),
    phoneNumber: joi.string().min(4).max(16).required(),
    email: joi.string().email().required(),
    birthDate:joi.date().raw().required(),
    passWord:joiPassword
    .string()
    .minOfSpecialCharacters(2)
    .minOfLowercase(2)
    .minOfUppercase(2)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .required(),    
    confirmPassword: joi.ref('passWord')
   });
 
   // schema options
   const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
};

//from where to get the data
const body = req.body;




//validate the data
const { error, value } = schema.validate(body, options);
   
   
      
    if (error) {
        const errorMsgObj = [];

        for (const detail of error.details) {
            errorMsgObj.push(detail.message);
        }

        return res.send({code: validationFuncation.BAD_REQUEST, message: errorMsgObj})

    }   

   next();
 
}


//change password validation
const cpasswordValidaion = (req,res,next)=> {
    const schema = joi. object().keys({  
        passWord:joiPassword
        .string()
        .minOfSpecialCharacters(2)
        .minOfLowercase(2)
        .minOfUppercase(2)
        .minOfNumeric(2)
        .noWhiteSpaces()
        .required(),
        email: joi.string().email().required()  
      });

        // schema options
   const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
};

//from where to get the data
const body = req.body;


//validate the data
const { error, value } = schema.validate(body, options); 
        
    if (error) {
        const errorMsgObj = [];

        for (const detail of error.details) {
            errorMsgObj.push(detail.message);
        }

        return res.send({code: validationFuncation.BAD_REQUEST, message: errorMsgObj})

    }  
   next();
} 

//forgot password validation
const forgotValidaion = (req,res,next) => {

    const schema = joi. object().keys({
        email: joi.string().email().required(),   
        passWord:joiPassword
        .string()
        .minOfSpecialCharacters(2)
        .minOfLowercase(2)
        .minOfUppercase(2)
        .minOfNumeric(2)
        .noWhiteSpaces()
        .required(),        
        confirmPassword: joi.ref('passWord')
      });

              // schema options
   const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
};

//from where to get the data
const body = req.body;


//validate the data
const { error, value } = schema.validate(body, options); 
        
    if (error) {
        const errorMsgObj = [];

        for (const detail of error.details) {
            errorMsgObj.push(detail.message);
        }

        return res.send({code: validationFuncation.BAD_REQUEST, message: errorMsgObj})

    }  
   next();

}

module.exports = {
    validationFuncation,
    cpasswordValidaion,
    forgotValidaion 
}