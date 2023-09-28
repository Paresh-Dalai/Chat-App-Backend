



let express = require("express");
let router = express.Router();
let AuthRoute = require("./../Routes/Auth.route");
let PostRoute = require("./../Routes/Post.route");
let GroupRoute = require("./../Routes/Group.route");
let ChatRoute = require("../Routes/Chat.route");
let FriendRequestRoute = require("./../Routes/FriendRequest.route");

router.use("/userCreation" , AuthRoute)
router.use("/Post" , PostRoute)
router.use("/Group", GroupRoute)
router.use("/chat" , ChatRoute);
router.use("/friendRequest" , FriendRequestRoute);

module.exports = router;
