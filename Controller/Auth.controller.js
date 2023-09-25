const UserModel = require("./../Model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./../Config/auth.config");

async function createUser (req,res) {
     
    let userObject = {
        userName : req.body.userName,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        emailId : req.body.emailId,
        DOB : req.body.DOB,
        password : bcrypt.hashSync(req.body.password, 8),
        role : "CUSTOMER"
    }

    if (!userObject) {
         res.send("Please Fill all required field for register...").status(201)

    } else if (userObject) {
       await UserModel.create(userObject);
     
        res.send("User Registration completed...").status(200);
        console.log(userObject.firstName + "Welcome to this portal...")

    }
}


async function signIn (req,res) {

     let enteredEmailId = req.body.emailId;
     let enteredPassword = req.body.password;

     try {

        if (!enteredEmailId || !enteredPassword) {
            res.json({message : "Please Enter username and password for successfully signIn..."}).status(201)

         } else if (enteredEmailId && enteredPassword) {
             
            let findUserInDB = await UserModel.findOne( {where : { emailId : req.body.emailId } });


            if(!findUserInDB) {
                res.json({message : "User Not Found..."}).status(404);
                return;

            
            } 
            
            else if (findUserInDB) {
                 
                let passwordValidation = bcrypt.compareSync(

                    req.body.password,
                    findUserInDB.password

                    );

                 if (!passwordValidation) {
                     res.json({message : "Password Incorrect"}).status(401);
                     return;
                 }

                 const token = jwt.sign(
                    { userId: findUserInDB.userId, emailId: findUserInDB.emailId },
                    config.secret,
                    { expiresIn: 86400 }
                );

                 res.send({
                    emailId : findUserInDB.emailId,
                    accessToken : token
                 }).status(201)
            }

         }

     } catch (error) {
         console.log("error occured in signIn process..." + error)
     }

}



module.exports = { createUser, signIn };
