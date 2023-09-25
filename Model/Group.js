const Sequelize = require('sequelize');
const db = require('../Config/db.config');
const User = require("./../Model/User");

const Group = db.define('Group', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM('public', 'private'),
    allowNull: false,
  },
});


Group.belongsToMany(User, { through: 'UserGroup', foreignKey: 'groupId' });
User.belongsToMany(Group, { through: 'UserGroup', foreignKey: 'userId' });

module.exports = Group;
