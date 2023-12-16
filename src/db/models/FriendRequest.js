import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'
import User from './User.js'

class FriendRequest extends Model {}
FriendRequest.init(
  {
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'accepted', 'rejected', 'canceled'],
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'friend_requests',
  }
)

User.hasMany(FriendRequest, {
  as: 'friend_request',
  foreignKey: 'user_id',
})
FriendRequest.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
})

export default FriendRequest
