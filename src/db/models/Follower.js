import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'
import User from './User.js'

class Follower extends Model {}
Follower.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    follower_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true,
    modelName: 'followers',
  }
)
User.hasMany(Follower, {
  as: 'followers',
  foreignKey: 'user_id',
})
Follower.belongsTo(User, {
  as: 'profile',
  foreignKey: 'user_id',
})
Follower.belongsTo(User, {
  as: 'profile',
  foreignKey: 'follower_id',
})

export default Follower
