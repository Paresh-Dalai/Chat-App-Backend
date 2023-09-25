

const Group = require('../Model/Group');
const Message = require("./../Model/Message");


const createGroup = async (req, res) => {
  try {
    const { name, type } = req.body;
    const group = await Group.create({ name, type });
    res.status(201).json(group);
  } catch (error) {
    console.error('Error creating group:', error);
    res.status(500).json({ error: 'Failed to create group' });
  }
};


const joinPrivateGroup = async (req, res) => {
    try {
      const userId = req.user.userId; 
      const groupId = req.params.groupId;
      const group = await Group.findByPk(groupId);
  
      if (!group) {
        return res.status(404).json({ error: 'Group not found' });
      }
  
    
      await group.addUser(userId);
  
      res.status(200).json({ message: 'Joined group successfully' });
    } catch (error) {
      console.error('Error joining group:', error);
      res.status(500).json({ error: 'Failed to join group' });
    }
  };
  

  // Send a message in a group
const sendMessage = async (req, res) => {
    try {
      const sendUser = req.user.emailId; 
      const groupId = req.params.groupId;
      const content = req.body.content;
  
     
      const message = await Message.create({ content , sendUser});
      const group = await Group.findByPk(groupId);
  
      if (!group) {
        return res.status(404).json({ error: 'Group not found' });
      }
  
      // await message.sendUser(sendUser);
      await message.setGroup(groupId);
  
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  };
  

module.exports = {createGroup , joinPrivateGroup,sendMessage };
