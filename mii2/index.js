const express = require("express");
const app = express();
const port = 3000;
 
 
 
//importing database connection
 
const database = require('./utils/database')

 
 
//initiate body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
 
//file import
const signUpinfo = require('./routers/userRouter');
const userTodo = require('./routers/todoRouter');
 
 
//file use
app.use('/api/v1',signUpinfo)
app.use('/api/v1',userTodo)
 
 
 
 
database.sync({ alter: false }).then(() => {      
    app.listen(port, () =>
    console.log(`Server started on port ${port}`)
);
}).catch(error => {
      console.log("I am in error part",error)
})


