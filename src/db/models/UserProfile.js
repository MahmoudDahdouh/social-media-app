import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'
import User from './User.js'
class UserProfile extends Model {}
UserProfile.init(
  {
    first_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING(512),
      defaultValue: '',
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: '',
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
