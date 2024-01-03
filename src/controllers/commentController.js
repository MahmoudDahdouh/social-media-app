import Comment from '../db/models/Comment.js'
import StatusResponse from '../utils/StatusResponse.js'
import CustomError from '../utils/error/CustomError.js'

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

/**
 * delete comment
 * POST
 * @body comment_id
 */
export const deleteComment = async (req, res) => {
  const { user, comment_id } = req.body
  const comment = await Comment.destroy({
    where: {
      id: comment_id,
      user_id: user.id,
    },
  })
  if (!comment) {
    throw new CustomError(404, 'Comment is not found!')
  }
  res.json({ ...StatusResponse(), comment })
}

/**
 * update comment
 * PATCH
 * @body comment_id,new_comment
 */
export const updateComment = async (req, res) => {
  const { user, comment_id, new_comment } = req.body
  const comment = await Comment.update(
    {
      body: new_comment,
    },
    {
      where: {
        id: comment_id,
        user_id: user.id,
      },
    }
  )
  if (!comment[0]) {
    throw new CustomError(404, 'Comment is not found!')
  }
  res.json({ ...StatusResponse(200, 'Comment updated!') })
}
