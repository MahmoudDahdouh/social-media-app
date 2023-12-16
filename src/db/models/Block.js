const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config/connect')
const User = require('./User')

class Block extends Model {}
Block.init(
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
    modelName: 'blocks',
  }
)
User.hasMany(Block, { as: 'blocks', foreignKey: 'user_id' })
Block.belongsTo(User, { as: 'user', foreignKey: 'user_id' })

module.exports = Block
