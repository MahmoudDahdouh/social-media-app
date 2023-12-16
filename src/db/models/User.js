const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config/connect')
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
module.exports = User
