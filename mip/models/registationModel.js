const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../utils/database')
 
 
class userModel extends Model {}
 
userModel.init({
    firstName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },

    lastName: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      phoneNumber: {
        type: DataTypes.STRING(500),
        allowNull: true
      }, 
      email: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      passWord:{
        type: DataTypes.STRING(500),
        allowNull: true
      },   
     
        
    active:{
      type: DataTypes.UUID(1),
      allowNull: false,
      defaultValue: 1,
    },    
  },
 
 
  {
    sequelize,
    tableName: 'users',
    timestamps: false
  }
);
 
userModel.associate = (db) => {
 
};
module.exports = userModel;