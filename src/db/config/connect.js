const { Sequelize } = require('sequelize')
const Config = require('../../../src/config/environment')

const sequelize = new Sequelize(Config.database.development.uri)

module.exports = {
  sequelize,
}
