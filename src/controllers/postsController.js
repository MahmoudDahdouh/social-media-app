import Post from '../db/models/Post.js'
import User from '../db/models/User.js'
import StatusResponse from '../utils/StatusResponse.js'
import CustomError from '../utils/error/CustomError.js'

/**
 * create new Post
 * POST
 * content
 */
export const createPost = async (req, res) => {
  const { content, user } = req.body

  const post = await Post.create({
    content,
    user_id: user.id,
  })
  res.status(201).json({ ...StatusResponse(201, 'New post add!'), post })
}

/**
 * update Post
 * PATCH
 * content
 */
export const updatePost = async (req, res) => {
  const { content, user } = req.body
  const { id } = req.params

  const post = await Post.update(
    {
      content,
    },
    {
      where: {
        id,
        user_id: user.id,
      },
    }
  )
  if (post[0] === 0) {
    return res.status(403).json({
      ...StatusResponse(403, 'Your are not allowed to edit this post!', false),
    })
  }
  return res
    .status(200)
    .json({ ...StatusResponse(200, 'The post updated successfully!') })
}

/**
 * delete Post
 * DELETE
 */
export const deletePost = async (req, res) => {
  const { id, user } = req.body

  const post = await Post.update(
    {
      is_deleted: true,
    },
    {
      where: {
        id,
        user_id: user.id,
      },
    }
  )

  if (post[0] === 0) {
    return res.status(403).json({
      ...StatusResponse(
        403,
        'Your are not allowed to delete this post!',
        false
      ),
    })
  }
  return res
    .status(200)
    .json({ ...StatusResponse(200, 'The post deleted successfully!') })
}

/**
 * get Post
 * GET
 * @param id
 */
export const getPost = async (req, res) => {
  const { id } = req.params

  const post = await Post.findOne({
    where: { id },
    include: {
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password_hash', 'refresh_token', 'user_role'],
      },
    },
  })
  if (!post) {
    throw new CustomError(404, 'The post is not found!')
  }
  res.status(200).json({ post })
}
