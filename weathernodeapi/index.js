const express = require('express');
const app = express();
const port = 3035;



//initiate body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
 
 
//import routes
const userRoutes = require('./routes/routeweather');



//use routes
app.use('/api/v1/user', userRoutes);


app.listen(port,()=>{
    console.log(`sever is running on port ${port}`)
})