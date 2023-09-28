const FriendRequest = require('../Model/FriendRequest');

// Send a friend request
exports.sendFriendRequest = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const request = await FriendRequest.create({ senderId, receiverId });
    res.status(201).json(request);
  } catch (error) {
    console.error('Error sending friend request:', error);
    res.status(500).json({ error: 'Failed to send friend request' });
  }
};

// Accept a friend request
exports.acceptFriendRequest = async (req, res) => {
  try {
    const requestId = req.params.id;
    const request = await FriendRequest.findByPk(requestId);

    if (!request) {
      return res.status(404).json({ error: 'Friend request not found' });
    }

    request.status = 'accepted';
    await request.save();
    res.json({ message: 'Friend request accepted' });
  } catch (error) {
    console.error('Error accepting friend request:', error);
    res.status(500).json({ error: 'Failed to accept friend request' });
  }
};

// Reject a friend request
exports.rejectFriendRequest = async (req, res) => {
  try {
    const requestId = req.params.id;
    const request = await FriendRequest.findByPk(requestId);

    if (!request) {
      return res.status(404).json({ error: 'Friend request not found' });
    }

    request.status = 'rejected';
    await request.save();
    res.json({ message: 'Friend request rejected' });
  } catch (error) {
    console.error('Error rejecting friend request:', error);
    res.status(500).json({ error: 'Failed to reject friend request' });
  }
};
