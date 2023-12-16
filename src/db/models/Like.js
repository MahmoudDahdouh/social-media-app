const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config/connect')
const User = require('./User')
const Post = require('./Post')
class Like extends Model {}
Like.init(
  {},
  {
    sequelize,
    underscored: true,
    modelName: 'likes',
  }
)
User.hasMany(Like, {
  as: 'likes',
  foreignKey: 'user_id',
})
Like.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
})
Post.hasMany(Like, {
  as: 'likes',
  foreignKey: 'post_id',
})
Like.belongsTo(Post, {
  as: 'post',
  foreignKey: 'post_id',
})

module.exports = Like
