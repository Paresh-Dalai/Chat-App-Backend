

let sequelize = require("sequelize");

let sequelizeInstance = new sequelize(
  "database1","root","Paresh@123",
  {
    host : "localhost",
    dialect : "mysql",
    operatorAliases : false,

    pool : {
       max : 8,
       min : 0,
       acquire : 3000,
       idle : 80000,
    },
  }
);

module.exports = sequelizeInstance;
