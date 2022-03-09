const axios = require('axios');
 
//weather api function create kiya ha jise me.
const bitcoinApi = async (req,res,next)=>{
 
//cityName send kiya ha user se input liya gya ha.    
    //const cityName = req.query.cityName;
 
 
//es result data (variable) me url ake andere city name liya ha jo ki user ne diya ha.      
    let result = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);    
   
 //api sahit user input leker age send kiya gya ha.  
    let data = result.data;
 
    console.log(data)
 
    //ek custom object create kiya and usse ham ejs ke page pe use karenge..
    //iss object ka sara data ejs page pe aa jaayega...
    let bitcoinrObj = {
        updatedtime:data.time.updated,
        notesad:data.disclaimer,
        usd:data.bpi.USD.rate,
        usddesc:data.bpi.USD.description,
        gbp:data.bpi.GBP.rate,
        gbpdesc:data.bpi.GBP.description
    };
 
    //ejs ka page load kar rahe hai, and uspe 2nd argument me data ka Object
    //send kar rahe hai, yeah data hame wha pe milega..
    res.render('pages/bitcoinview',{data:bitcoinrObj});
 
 
   
 
}
 
 
 
module.exports = {
    bitcoinApi
}
 
