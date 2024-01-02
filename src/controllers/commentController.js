import Comment from '../db/models/Comment.js'
import StatusResponse from '../utils/StatusResponse.js'

/**
 * add comment
 * POST
 * @body commentBody, post_id
 */
export const addComment = async (req, res) => {
  const { user, comment: commentBody, post_id } = req.body
  const comment = await Comment.create({
    body: commentBody,
    user_id: user.id,
    post_id: post_id,
  })
  res.json({ ...StatusResponse(), comment })
}
