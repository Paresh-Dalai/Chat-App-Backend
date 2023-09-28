const Sequelize = require('sequelize');
const db = require('../Config/db.config');

const FriendRequest = db.define('FriendRequest', {
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  receiverId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('pending', 'accepted', 'rejected'),
    defaultValue: 'pending',
  },
});

module.exports = FriendRequest;
