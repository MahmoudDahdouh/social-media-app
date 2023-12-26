import FriendRequest from '../db/models/FriendRequest.js'

/**
 * create new Friend Request Post
 * POST
 * @body target_id
 */
export const createFriendRequest = async (req, res) => {
  const { target_id, user } = req.body
  const friendRequest = await FriendRequest.create({
    user_id: user.id,
    target_id,
  })
  res.json({ user, target_id, friendRequest })
}
