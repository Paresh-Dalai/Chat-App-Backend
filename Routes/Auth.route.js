

const express = require("express");
const AuthController = require("./../Controller/Auth.controller");
const AuthRouter = express.Router();
const expressApp = express();


expressApp.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

AuthRouter.post("/signUp" , AuthController.createUser);
AuthRouter.post("/signIn" , AuthController.signIn);

module.exports = AuthRouter;