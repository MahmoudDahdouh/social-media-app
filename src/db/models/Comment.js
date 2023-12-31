import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'

import User from './User.js'
import Post from './Post.js'

class Comment extends Model {}
Comment.init(
  {
    body: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
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

export default Comment
