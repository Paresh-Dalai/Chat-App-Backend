const express = require('express');
const router = express.Router();
const chatController = require('../Controller/Chat.controller');


router.post('/create', chatController.createChatMessage);

// Route to get all chat messages for a specific chat
router.get('/:chatId', chatController.getChatMessages);

// Route to add a user to a chat
router.post('/:chatId/addUser', chatController.addUserToChat);

module.exports = router;
