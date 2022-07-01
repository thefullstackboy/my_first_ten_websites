const jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');
const userModel = require("../models/userModel");





//create input filed for signUpform 
const signUpform = async (req,res,next)=> {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const birthDate = req.body.birthDate;
    let passWord = req.body.passWord;
    const confirmPassword = req.body.confirmPassword;



    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("phoneNumber", phoneNumber);
    console.log("email", email);
    console.log("birthDate", birthDate);
    console.log("passWord",passWord);
    console.log("confirmPassword",confirmPassword);

    passWord = await bcrypt.hash(passWord, 10);

    //data object bbama kare send karna ha 
    const formInfomation = {
        firstName:firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        birthDate: birthDate,
        passWord: passWord,
    } 

    const user = await userModel.create(formInfomation);
    res.send({message:"success", data:user});
}



//login form
const loginForm = async(req,res,next) => {
try{
    console.log("Login form worked");
    const email = req.body.email;
    const passWord = req.body.passWord;
    
    console.log("email",email);
    //change SignUpModel to userModel..
    const user = await userModel.findOne({where:{email:email}});
    if(user){
        match = await bcrypt.compare(passWord, user.passWord);
        if(match){
            let authToken = await createAuthentication(user);
            res.send({success:true,authToken:authToken, message:"login succesfully."});
        } else{
            res.send({failed:'failed'});           
        }
    } else{
        console.log("username not found");
        res.send({message:'failed'});
    }

  
} catch (error) {
    console.log(error);
    res.status(400).send("invalid login Details")
}
   
}


//change password
const changePassword  = async (req,res,next)=> { 
    try{
    const email = req.body.email;    
    const passWord = req.body.passWord;  
   
    console.log("Password", passWord)    
    const passwordHash = await bcrypt.hash(passWord, 10);

    const todoUpdateData= {
       passWord: passwordHash,            
     };   

    const result = await userModel.update(
        todoUpdateData,
        {where:{email:email}}       
      )    
    res.send({success:true, data:result, message:"your password change"})
    } catch(err){
        console.log(err)
        res.send({success:false, data:[]});
    }
}


//forgot password
const forgotPassword = async(req,res,next)=> {
    try{
        const email = req.body.email;    
        const passWord = req.body.passWord;
        const confirmPassword = req.body.confirmPassword;  
       
        console.log("Password", passWord)    
        const passwordHash = await bcrypt.hash(passWord, 10);
    
        const todoUpdateData= {
           passWord: passwordHash,            
         };   
    
        const result = await userModel.update(
            todoUpdateData,
            {where:{email:email}}       
          )    
        res.send({success:true, data:result, message:"your new password"})
        } catch(err){
            console.log(err)
            res.send({success:false, data:[]});
        }    
}

//create token
const createAuthentication = async(user) => {
    const token = jwt.sign(
        {userId:user.id},
         "abdhgubjekp",
        {
          expiresIn: "2h",
        }
      );
    return token;
}

//verify token
const verifyAuthentication = async(req,res,next) => {
    try {
      if (req.headers && req.headers.authorization) {
        console.log("I am in if part...")
        console.log("token",req.headers.authorization);
          const token = req.headers.authorization;
          if (!token) {
            return res.status(403).send({success:false,data:{message:"authToken is required for authentication!"}});
          }
          try {
            const decoded = jwt.verify(token, "abdhgubjekp");
            req.body.userId = decoded.userId;
            return next();
          } catch (err) {
            console.log(err);
            return res.status(401).send({success:false, data:{message:"Invalid Token"}});
          }    
      } else {
        return res.status(403).send({success:false,data:{message:"authToken is required for authentication!"}});
      }
    } catch (error) {
        console.log(error);
        res.send({success:false,data:[]});
    }
}



module.exports = {
    signUpform,
    loginForm,
    changePassword,
    forgotPassword,
    createAuthentication,
    verifyAuthentication     
}


