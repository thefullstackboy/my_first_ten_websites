const Sequelize = require('sequelize')
 
const sequelize = new Sequelize('registation', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
});
 
sequelize.authenticate()
    .then(function () {
      console.log("CONNECTED! ");
    })
    .catch(function (err) {
      console.log("SOMETHING went wrong");
    });
 
 
module.exports = sequelize