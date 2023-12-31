import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'
class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
    },
    user_role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'],
      allowNull: false,
      defaultValue: 'user',
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    refresh_token: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
)
export default User
