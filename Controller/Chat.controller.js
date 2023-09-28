const Chat = require('../Model/Chat');
const User = require("./../Model/User")
// Create a new chat message
exports.createChatMessage = async (req, res) => {
  try {
    const { message, userIds } = req.body; // Assuming you pass an array of user IDs in userIds
    const chat = await Chat.create({ message });

    // Associate users with the chat
    if (userIds && userIds.length > 0) {
      await chat.setUsers(userIds); // Assuming you have a 'setUsers' method in your model
    }

    res.status(201).json(chat);
  } catch (error) {
    console.error('Error creating chat message:', error);
    res.status(500).json({ error: 'Failed to create chat message' });
  }
};

// Get all chat messages for a specific chat
exports.getChatMessages = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const chat = await Chat.findByPk(chatId, {
      include: ['Users'], // Include associated users
    });

    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    res.status(200).json(chat);
  } catch (error) {
    console.error('Error fetching chat messages:', error);
    res.status(500).json({ error: 'Failed to fetch chat messages' });
  }
};

// Add a user to a chat
exports.addUserToChat = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const userId = req.body.userId;

    const chat = await Chat.findByPk(chatId);
    const user = await User.findByPk(userId); // Assuming you have a User model

    if (!chat || !user) {
      return res.status(404).json({ error: 'Chat or user not found' });
    }

    await chat.addUser(user);

    res.status(200).json({ message: 'User added to the chat' });
  } catch (error) {
    console.error('Error adding user to chat:', error);
    res.status(500).json({ error: 'Failed to add user to chat' });
  }
};
