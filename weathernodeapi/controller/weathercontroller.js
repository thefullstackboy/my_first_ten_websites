const axios = require('axios');

//weather api function create kiya ha jise me.
const weatherApi = async (req,res,next)=>{

//cityName send kiya ha user se input liya gya ha.    
    const cityName = req.query.cityName;


//es result data (variable) me url ake andere city name liya ha jo ki user ne diya ha.      
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a3fa929a5a7fb4365ea46c103e2db342`);    
    
 //api sahit user input leker age send kiya gya ha.   
    let data = result.data;


     res.send({
        success:true,
        data:data})

    console.log(cityName);   
    console.log(data);
}
 

module.exports = {
    weatherApi     
}
