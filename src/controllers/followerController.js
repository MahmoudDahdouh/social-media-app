import Follower from '../db/models/Follower.js'
import StatusResponse from '../utils/StatusResponse.js'

/**
 * get all followers
 * GET
 */
export const getAllFollowers = async (req, res) => {
  const { user } = req.body
  let { page, page_size } = req.query
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
