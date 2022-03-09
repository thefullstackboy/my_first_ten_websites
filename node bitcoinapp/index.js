const express = require('express');
const path = require('path');
const app = express();
const port = 3035;
 
 
//set view engine
app.set('view engine', 'ejs')
app.set('views','views')
 
//set static folder directory
app.use(express.static(path.join(__dirname,'public')))
 
 
//initiate body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
 
 
//import routes
const userRoutes = require('./routes/bitcoin');
 
 
 
//use routes
app.use('/api/v1/user', userRoutes);
 
 
app.listen(port,()=>{
    console.log(`sever is running on port ${port}`)
})
