import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'
import User from './User.js'

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
export default Post
