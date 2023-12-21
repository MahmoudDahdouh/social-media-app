import bcrypt from 'bcrypt'
import User from '../db/models/User.js'
import UserProfile from '../db/models/UserProfile.js'

import CustomError from '../utils/error/CustomError.js'
import { sequelize } from '../db/config/connect.js'

/**
 * login
 * POST
 * email, password
 */
export const login = async (req, res) => {
  const { email, password } = req.body

  // Check if the user is exist
  let user = await User.findOne({
    where: {
      email,
      user_role: 'user',
    },
    include: [
      {
        model: UserProfile,
        as: 'user_profile',
        attributes: [
          'first_name',
          'last_name',
          'bio',
          'country',
          'date_of_birth',
        ],
      },
    ],
  })
  if (!user) {
    throw new CustomError(404, 'User is not found!')
  }
  // check the password
  const isSamePassword = await bcrypt.compare(password, user.password_hash)
  // Password is wrong
  if (!isSamePassword) {
    throw new CustomError(401, 'Password is wrong!')
  }

  const user_profile = user.dataValues.user_profile.dataValues
  delete user.dataValues.user_profile.dataValues
  user = { ...user.dataValues, ...user_profile }
  delete user.password_hash

  return res.json(user)
}

/**
 * sign up
 * POST
 * first_name, last_name, email, password
 */
export const signUp = async (req, res, next) => {
  const { first_name, last_name, username, email, password, date_of_birth } =
    req.body
  const password_hash = await bcrypt.hash(password, 10)
  await sequelize.transaction(async (t) => {
    // check if email is exist
    const isEmailExist = await User.findOne(
      {
        where: {
          email,
        },
      },
      {
        transaction: t,
      }
    )
    if (isEmailExist) {
      throw new CustomError(409, 'Email is already exist!')
    }

    // check if username is exist
    const isUsernameExist = await User.findOne(
      {
        where: {
          username,
        },
      },
      {
        transaction: t,
      }
    )
    if (isUsernameExist) {
      throw new CustomError(409, 'Username is already exist!')
    }

    // create user
    const user = await User.create(
      { username, email, password_hash },
      {
        transaction: t,
      }
    )
    delete user.dataValues.password_hash

    // create user profile
    const user_profile = await UserProfile.create(
      {
        first_name,
        last_name,
        date_of_birth,
        user_id: user.id,
      },
      {
        transaction: t,
      }
    )
    delete user_profile.dataValues.id
    delete user_profile.dataValues.user_id
    delete user_profile.dataValues.created_at
    delete user_profile.dataValues.updated_at

    res.json(...user.dataValues, ...user_profile.dataValues)
  })
}
