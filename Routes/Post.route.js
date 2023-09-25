
const express = require("express");
const PostController = require("./../Controller/Post.controller");
const PostRouter = express.Router();
const jwtTokenVerification = require("./../Middlewares/authJwt")


PostRouter.post("/createPost" , [jwtTokenVerification.VerifyToken], PostController.createPost);
PostRouter.get("/allPosts" , PostController.getAllPosts);
PostRouter.get("/:emailId" , [jwtTokenVerification.VerifyToken] , PostController.getPostByUserEmailId);

module.exports = PostRouter;