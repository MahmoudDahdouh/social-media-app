import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'
import User from './User.js'
class UserProfile extends Model {}
UserProfile.init(
  {
    first_name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING(512),
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    country: {
      type: DataTypes.STRING,
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
    modelName: 'user_profile',
  }
)

User.hasOne(UserProfile, { as: 'user_profile', foreignKey: 'user_id' })
UserProfile.belongsTo(User, { as: 'user', foreignKey: 'user_id' })

export default UserProfile
