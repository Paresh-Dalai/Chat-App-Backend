




let sequelize = require("sequelize");
let databaseConnection = require("./../Config/db.config");
let User = require("./../Model/User");


let Post = databaseConnection.define("Posts" ,
    {
      content : {
         type : sequelize.DataTypes.STRING,
         allowNull : false
      },
      type : {
         type : sequelize.DataTypes.ENUM("permanent","temporary"),
         allowNull:false,
      },
      duration : {
        type : sequelize.DataTypes.INTEGER,
        default : 0
      },
      createdBy: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },
    }, {timestamps : false}
);
Post.belongsTo(User, { foreignKey: 'createdBy' , targetKey: 'emailId'});
module.exports = Post;