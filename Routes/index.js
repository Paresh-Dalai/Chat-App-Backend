



let express = require("express");
let router = express.Router();
let AuthRoute = require("./../Routes/Auth.route");
let PostRoute = require("./../Routes/Post.route");
let GroupRoute = require("./../Routes/Group.route");

router.use("/userCreation" , AuthRoute)
router.use("/Post" , PostRoute)
router.use("/Group", GroupRoute)

module.exports = router;
