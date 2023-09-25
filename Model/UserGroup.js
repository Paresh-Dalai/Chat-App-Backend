const Sequelize = require('sequelize');
const db = require('../Config/db.config');

const UserGroup = db.define('UserGroup', {});

module.exports = UserGroup;