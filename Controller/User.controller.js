

const UserModel = require("./../Model/User");
let DB = require("./../Config/db.config");
let bcrypt = require("bcryptjs");

async function insertUser () {
    await UserModel.bulkCreate(
        [
            {
                userId : 1,
                userName : "Amarjeet_01",
                role : "ADMIN",
                firstName : "Amarjeet",
                lastName : "Dalai",
                emailId : "Amar123@gmail.com",
                DOB : "10-02-2015",
                password : bcrypt.hashSync("Amar@123",8)
            }
        ]
    )
}



module.exports = {insertUser }