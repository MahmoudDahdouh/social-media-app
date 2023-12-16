const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config/connect')
const User = require('./User')

class UserFriend extends Model {}
UserFriend.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'user_friends',
  }
)
User.hasMany(UserFriend, {
  as: 'friends',
  foreignKey: 'user_id',
})
UserFriend.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
})

module.exports = UserFriend
