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
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'follower_id'],
      },
    ],
  }
)
User.hasMany(Follower, {
  as: 'followers',
  foreignKey: 'user_id',
})
Follower.belongsTo(User, {
  as: 'user_profile',
  foreignKey: 'user_id',
})
Follower.belongsTo(User, {
  as: 'follower_user',
  foreignKey: 'follower_id',
})

export default Follower
