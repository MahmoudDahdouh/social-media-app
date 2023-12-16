const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config/connect')
const User = require('./User')

class Post extends Model {}
Post.init(
  {
    body: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'posts',
  }
)
User.hasMany(Post, {
  as: 'posts',
  foreignKey: 'user_id',
})
Post.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
})
module.exports = Post
