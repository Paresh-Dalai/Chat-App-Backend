


let sequelize = require("sequelize");
let databaseConnection = require("./../Config/db.config");


let Roles = databaseConnection.define("Roles" ,
    {
      id : {
        type : sequelize.DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
      },
      Role : {
        type : sequelize.DataTypes.STRING,
        allowNull : false
      }
    } , {timestamps : false}
);

module.exports = Roles;