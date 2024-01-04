import User from '../db/models/User.js'
import UserProfile from '../db/models/UserProfile.js'
import StatusResponse from '../utils/StatusResponse.js'
import CustomError from '../utils/error/CustomError.js'

export const getUserProfile = async (req, res) => {
  const { user } = req.body
  const user_profile = await User.findOne({
    where: {
      id: user.id,
    },
    attributes: { exclude: ['password_hash', 'refresh_token'] },
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
  const resUser = {
    ...user_profile.dataValues,
    ...user_profile.user_profile.dataValues,
  }
  delete resUser.user_profile

  res.status(200).json({
    ...StatusResponse(200, 'User profile fetched successfully!'),
    user: resUser,
  })
}

export const getUserProfileByUsername = async (req, res) => {
  const { username } = req.params
  const user_profile = await User.findOne({
    where: {
      username,
    },
    attributes: { exclude: ['password_hash', 'refresh_token'] },
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

  if (!user_profile) {
    throw new CustomError(404, 'User is not found!')
  }
  const resUser = {
    ...user_profile.dataValues,
    ...user_profile.user_profile.dataValues,
  }
  delete resUser.user_profile

  res.status(200).json({
    ...StatusResponse(200, 'User profile fetched successfully!'),
    user: resUser,
  })
}
