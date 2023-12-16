const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config/connect')
const User = require('./User')
const Post = require('./Post')

class Comment extends Model {}
Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'comments',
  }
)

User.hasMany(Comment, {
  as: 'comments',
  foreignKey: 'user_id',
})
Comment.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
})
Post.hasMany(Comment, {
  as: 'comments',
  foreignKey: 'post_id',
})
Comment.belongsTo(Post, {
  as: 'post',
  foreignKey: 'post_id',
})

module.exports = Comment
