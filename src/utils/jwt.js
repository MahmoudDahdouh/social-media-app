import jwt from 'jsonwebtoken'
import Config from '../config/environment.js'
import CustomError from './error/CustomError.js'

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, Config.jwt.access_secret_key)
  } catch (error) {
    throw new CustomError(401, 'You are not authorized!')
  }
}

export const generateToken = (payload, secret_key, options) => {
  return jwt.sign(payload, secret_key, options)
}
