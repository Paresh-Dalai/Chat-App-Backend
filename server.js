

const express = require("express");
const routes = require("./Routes/index");
const serverConfig = require("./Config/server.config");
const bodyParser = require("body-parser");
const databaseConnection = require("./Config/db.config");
const UserController = require("./Controller/User.controller");



let expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(routes);


let init = async () => {
   await databaseConnection.sync( {force : true} )
   await UserController.insertUser()
   await databaseConnection.sync({alter : true})

   console.log("User Table Created...")
}


expressApp.listen(serverConfig.PORT, () => {
   console.log("server is on Gear..." + " @PORT NO. " + serverConfig.PORT);
   init();
})