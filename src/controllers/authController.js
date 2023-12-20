import bcrypt from 'bcrypt'
import User from '../db/models/User.js'

import CustomError from '../utils/error/CustomError.js'

/**
 * login
 * POST
 * email, password
 */
export const login = async (req, res, next) => {
  const { email, password } = req.body

  // Check if the user is exist
  let user = await User.findOne({
    where: {
      email,
      user_role: 'user',
    },
  })
  if (!user) {
    return next(new CustomError(404, 'User is not found!'))
  }
  // check the password
  const isSamePassword = await bcrypt.compare(password, user.password_hash)
  if (isSamePassword) {
    delete user.dataValues.password_hash
    return res.json(user)
  }
  // Password is wrong
  return next(new CustomError(401, 'Password is wrong!'))
}

/**
 * sign up
 * POST
 * first_name, last_name, email, password
 */
export const signUp = async (req, res, next) => {}
