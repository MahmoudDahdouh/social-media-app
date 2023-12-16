const Config = require('../../config/environment.js')

module.exports = {
  development: {
    username: Config.database.development.username,
    password: Config.database.development.password,
    database: Config.database.development.database,
    host: Config.database.development.host,
    dialect: Config.database.development.dialect,
  },
  test: {
    username: '',
    password: null,
    database: '',
    host: '',
    dialect: '',
  },
  production: {
    username: '',
    password: null,
    database: '',
    host: '',
    dialect: '',
  },
}
