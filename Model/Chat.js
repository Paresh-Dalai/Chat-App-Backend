




const Sequelize = require('sequelize');
const db = require('../Config/db.config');
const User = require('./User'); 

const Chat = db.define('Chat', {
  message: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
});


Chat.belongsToMany(User, {
  through: 'ChatParticipants',
  foreignKey: 'chatId',
});
User.belongsToMany(Chat, {
  through: 'ChatParticipants',
  foreignKey: 'userId',
});

module.exports = Chat;
