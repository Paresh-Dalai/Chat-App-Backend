


const PostModel = require("./../Model/Post");
const UserModel = require("./../Model/User");


const createPost = async (req,res) => {
      
    const createdByUser = req.user.emailId;
    
    let postObject = {
        content : req.body.content,
        type : req.body.type,
        duration : req.body.duration,
        createdBy : createdByUser
    }

    try {

       if (postObject) {
        let postCreation = await PostModel.create(postObject);
        res.send(postCreation).status(201);

       } else {
          res.send("Please fill all the details for Successfully create a post...").status(201);
       }
      

    } catch (error) {
         console.log("error occured in post..." , error);
    }
   
}

const getAllPosts = async(req,res) => {

    try {

        let allPosts = await PostModel.findAll();
        if (allPosts) {
            res.send(allPosts).status(201);
        } else{
            res.json({message : "Unable to Find any posts"}).status(200);
        }

    } catch (error) {
        console.log("error occured while fetching all posts..." , error.message).status(400)
    }

   
}

const getPostByUserEmailId = async(req,res) => {
     
    const enteredemailId = req.params.emailId;

    try {

        let findemailId = await UserModel.findOne( { where : {emailId : enteredemailId }});

        if(findemailId) {
            let allPosts = await PostModel.findAll({where : {createdBy : enteredemailId}});
            res.send(allPosts).status(201);
        }

    } catch (error) {
        console.log("error occured while fetching all posts..." , error.message).status(400)
    }
}

module.exports = {createPost,getAllPosts,getPostByUserEmailId}