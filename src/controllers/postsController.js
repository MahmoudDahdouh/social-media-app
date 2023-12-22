import Post from '../db/models/Post.js'
import StatusResponse from '../utils/StatusResponse.js'

export const createPost = async (req, res) => {
  const { content, user } = req.body

  const post = await Post.create({
    content,
    user_id: user.id,
  })
  res.status(201).json({ ...StatusResponse(201, 'New post add!'), post })
}
