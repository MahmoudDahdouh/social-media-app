import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'
import User from './User.js'
import Post from './Post.js'
class Like extends Model {}
Like.init(
  {},
  {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
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

export default Like
