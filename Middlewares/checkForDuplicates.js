const db = require("./../Config/db.config");
const User = require("./../Model/User");

let checkDuplicateUserName = async (req, res, next) => {
  let user = await User.findOne({
    where: {
      userName: req.body.userName,
    },
  });

  if (user) {
    res.status(400).json({
      message: "User already exist",
    });
    return;
  }

  next();
};

let checkMailIdExisted = async (req, res, next) => {
  let enteredemailId = req.body.emailId;

  let emailIdInDb = await User.findOne ({where : {emailId : enteredemailId}});

  if(emailIdInDb) {
    res.send("entered emailId already exists in our DB, please try with a different one...").status(201);
    return;
  }

  next();
};

const verifySignUp = {
  checkDuplicateUserName: checkDuplicateUserName,
  checkMailIdExisted: checkMailIdExisted,
};
module.exports = verifySignUp;
