const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../utils/database')
 
class usertodoModel extends Model {}
 
usertodoModel.init({
      userId:{
        type: DataTypes.STRING(500),
        allowNull: true
      },
      taskTitle:{
        type: DataTypes.STRING(500),
        allowNull: true
      },
      taskDescription:{
        type: DataTypes.STRING(500),
        allowNull: true
      }, 
      taskTime:{
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
    tableName: 'todos',
    timestamps: false
  }
);
 
usertodoModel.associate = (db) => {
 
};
module.exports = usertodoModel;