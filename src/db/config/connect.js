import Sequelize from 'sequelize'
import Config from '../../../src/config/environment.js'

export const sequelize = new Sequelize(Config.database.development.uri)
