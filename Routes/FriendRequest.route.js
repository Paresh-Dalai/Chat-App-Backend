const express = require('express');
const router = express.Router();
const FriendRequestController = require('../Controller/FriendRequest.controller');
const authJwt = require("./../Middlewares/authJwt");

// Create a friend request
router.post('/send', [authJwt.VerifyToken],FriendRequestController.sendFriendRequest);

// Accept a friend request
router.put('/accept/:id', FriendRequestController.acceptFriendRequest);

// Reject a friend request
router.put('/reject/:id', FriendRequestController.rejectFriendRequest);

module.exports = router;
