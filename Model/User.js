


let sequelize = require("sequelize");
let databaseConnection = require("./../Config/db.config");


let Users = databaseConnection.define("Users" ,
    {
      userId : {
        type : sequelize.DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
      },
      userName : {
        type : sequelize.DataTypes.STRING,
        allowNull : false,
       
      } ,
      role : {
        type : sequelize.DataTypes.STRING,
        default : "USER"
      } ,
      firstName : {
        type : sequelize.DataTypes.STRING,
        allowNull : false
      } ,
      lastName : {
        type : sequelize.DataTypes.STRING,
        allowNull : false
      } ,
      emailId : {
        type : sequelize.DataTypes.STRING,
        allowNull : false,
        unique : true
      } ,
      DOB : {
        type : sequelize.DataTypes.DATE,
        allowNull : false
      } ,
      password : {
        type : sequelize.DataTypes.STRING,
        allowNull : false
      }
    }, {timestamps : false}
);

module.exports = Users;