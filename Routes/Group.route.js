const express = require('express');
const router = express.Router();
const GroupController = require('../Controller/Group.controller');
const TokenVerification = require("./../Middlewares/authJwt")

// Create a new group
router.post('/', GroupController.createGroup);

// Get all groups
// router.get('/', GroupController.getAllGroups);

// Join a private group (with invitation)
router.post('/join/:groupId', [TokenVerification.VerifyToken], GroupController.joinPrivateGroup);

// Send a message in a group
router.post('/:groupId/message', [TokenVerification.VerifyToken],GroupController.sendMessage);

module.exports = router;
