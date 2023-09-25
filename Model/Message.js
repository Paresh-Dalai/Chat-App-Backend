const Sequelize = require('sequelize');
const db = require('../Config/db.config');
const User = require("./User");
const Group = require("./Group");

const Message = db.define('Message', {
  content: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  sendUser : {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  }
});


Message.belongsTo(User,{ foreignKey: 'sendUser' , targetKey: 'emailId'});
Message.belongsTo(Group);

module.exports = Message;
