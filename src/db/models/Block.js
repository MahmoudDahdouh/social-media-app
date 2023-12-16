import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/connect.js'

import User from './User.js'

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

export default Block
