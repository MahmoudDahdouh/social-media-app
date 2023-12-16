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
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'users',
  }
)
export default User
