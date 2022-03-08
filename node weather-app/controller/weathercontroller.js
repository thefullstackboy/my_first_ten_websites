const axios = require('axios');

//weather api function create kiya ha jise me.
const weatherApi = async (req,res,next)=>{

//cityName send kiya ha user se input liya gya ha.    
    const cityName = req.query.cityName;


//es result data (variable) me url ake andere city name liya ha jo ki user ne diya ha.      
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a3fa929a5a7fb4365ea46c103e2db342`);    
    
 //api sahit user input leker age send kiya gya ha.   
    let data = result.data;

    console.log(data)

    //ek custom object create kiya and usse ham ejs ke page pe use karenge..
    //iss object ka sara data ejs page pe aa jaayega...
    let weatherObj = {
        temprature:data.main.temp,
        humidity:data.main.humidity,
        pressure:data.main.pressure,
        feelslike:data.main.feels_like,
       

        title: "Deepak Sewani" 
    };

    //ejs ka page load kar rahe hai, and uspe 2nd argument me data ka Object
    //send kar rahe hai, yeah data hame wha pe milega..
    res.render('pages/abc',{data:weatherObj});


    

}
 


module.exports = {
    weatherApi     
}
