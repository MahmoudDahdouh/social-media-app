import CustomError from '../utils/error/CustomError.js'
import { verifyToken } from '../utils/jwt.js'

export const checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new CustomError(401, 'You are not authorized!')
  }
  const token = authHeader.split(' ')[1]
  const payload = verifyToken(token)
  req.body.user = payload
  next()
}
