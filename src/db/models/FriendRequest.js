import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'
import User from './User.js'

class FriendRequest extends Model {}
FriendRequest.init(
  {
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'accepted', 'rejected', 'canceled'],
      defaultValue: 'pending',
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true,
    modelName: 'friend_requests',
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'target_id', 'status'],
        where: {
          status: ['pending', 'accepted'],
        },
      },
    ],
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
