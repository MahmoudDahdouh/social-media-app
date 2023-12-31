import dotenv from 'dotenv'
dotenv.config()

const requiredEnvVars = [
  // Server
  'PORT',
  'NODE_ENV',
  'JWT_ACCESS_SECRET_KEY',
  'JWT_REFRESH_SECRET_KEY',
  // Database - development
  'DEV_DB_USERNAME',
  'DEV_DB_PASSWORD',
  'DEV_DB_HOST',
  'DEV_DB_PORT',
  'DEV_DB_NAME',
  'DEV_DB_DIALECT',
  'DEV_DB_URI',
]

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is not defined`)
  }
})

const Config = {
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
  },
  jwt: {
    access_secret_key: process.env.JWT_ACCESS_SECRET_KEY,
    refresh_secret_key: process.env.JWT_REFRESH_SECRET_KEY,
  },
  database: {
    development: {
      host: process.env.DEV_DB_HOST,
      port: process.env.DEV_DB_PORT,
      dialect: process.env.DEV_DB_DIALECT,
      database: process.env.DEV_DB_NAME,
      username: process.env.DEV_DB_USERNAME,
      password: process.env.DEV_DB_PASSWORD,
      uri: process.env.DEV_DB_URI,
    },
  },
}

export default Config
