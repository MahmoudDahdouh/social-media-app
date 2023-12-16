const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config/connect')
const User = require('./User')
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
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'user_profile',
  }
)

User.hasOne(UserProfile)
UserProfile.belongsTo(User)

module.exports = UserProfile
