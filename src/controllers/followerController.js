import Follower from '../db/models/Follower.js'
import StatusResponse from '../utils/StatusResponse.js'
import CustomError from '../utils/error/CustomError.js'

/**
 * get all followers
 * GET
 */
export const getAllFollowers = async (req, res) => {
  const { user } = req.body
  const { page, page_size } = req.query
  const followers = await Follower.findAll({
    where: { user_id: user.id },
    limit: page_size,
    offset: (page - 1) * page_size,
  })

  res.json({
    ...StatusResponse(),
    followers,
    page,
    page_size,
  })
}

/**
 * get all followings
 * GET
 */
export const getAllFollowings = async (req, res) => {
  const { user } = req.body
  let { page, page_size } = req.query
  const followings = await Follower.findAll({
    where: { follower_id: user.id },
    limit: page_size,
    offset: (page - 1) * page_size,
  })

  res.json({ ...StatusResponse(), followings, page, page_size })
}

/**
 * follow a user
 * POST
 * @body follower_id
 */
export const followUser = async (req, res) => {
  const { user, follower_id } = req.body

  if (user.id === follower_id) {
    throw new CustomError(400, 'You cannot follow yourself')
  }
  const follower = await Follower.create({
    user_id: user.id,
    follower_id,
  })
  if (!follower) {
    throw new CustomError(400, 'You are already following this user')
  }

  res.status(201).json({ ...StatusResponse(201) })
}

/**
 * unfollow a user
 * POST
 * @body follower_id
 */
export const unfollowUser = async (req, res) => {
  const { user, follower_id } = req.body

  if (user.id === follower_id) {
    throw new CustomError(400, 'You cannot follow yourself')
  }
  const follower = await Follower.destroy({
    where: {
      user_id: user.id,
      follower_id,
    },
  })
  if (!follower) {
    throw new CustomError(400, 'You are not following this user')
  }

  res.status(201).json({ ...StatusResponse(200) })
}
