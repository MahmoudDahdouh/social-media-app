import { sequelize } from '../db/config/connect.js'
import Post from '../db/models/Post.js'
import User from '../db/models/User.js'
import StatusResponse from '../utils/StatusResponse.js'
import CustomError from '../utils/error/CustomError.js'

/**
 * create new Post
 * POST
 * @body content
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
 * @body content
 * @param id
 */
export const updatePost = async (req, res) => {
  const { content, user } = req.body
  const { id } = req.params
  let post = null
  let updatedPost = null
  await sequelize.transaction(async (t) => {
    // find the post
    post = await Post.findOne({
      where: {
        id,
        user_id: user.id,
      },
      transaction: t,
    })
    if (!post) {
      throw new CustomError(403, 'Your are not allowed to delete this post!')
    }
    if (post.dataValues.is_deleted) {
      throw new CustomError(404, 'Post is not found!')
    }

    // update the post
    updatedPost = await Post.update(
      {
        content,
      },
      {
        where: {
          id,
          user_id: user.id,
        },
        transaction: t,
      }
    )
  })

  post.dataValues.content = content
  post.dataValues.updated_at = new Date()

  return res.status(200).json({
    ...StatusResponse(200, 'The post updated successfully!'),
    post,
  })
}

/**
 * delete Post
 * DELETE
 * @body id
 */
export const deletePost = async (req, res) => {
  const { id, user } = req.body
  let updatedResult = null
  let post = null
  await sequelize.transaction(async (t) => {
    // find the post
    post = await Post.findOne({
      where: {
        id,
        user_id: user.id,
      },
      transaction: t,
    })
    if (!post) {
      throw new CustomError(403, 'Your are not allowed to delete this post!')
    }
    if (post.dataValues.is_deleted) {
      throw new CustomError(409, 'Post is already deleted!')
    }
    // update post
    updatedResult = await Post.update(
      {
        is_deleted: true,
      },
      {
        where: {
          id,
          user_id: user.id,
        },
        transaction: t,
      }
    )
  })
  post.dataValues.is_deleted = true
  post.dataValues.updated_at = new Date()

  res
    .status(200)
    .json({ ...StatusResponse(200, 'The post deleted successfully!'), post })
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
        exclude: ['password_hash', 'refresh_token', 'user_role', 'email'],
      },
    },
  })
  if (!post) {
    throw new CustomError(404, 'The post is not found!')
  }
  res.status(200).json({ post })
}
