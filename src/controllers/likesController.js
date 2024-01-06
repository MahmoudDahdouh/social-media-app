import Like from '../db/models/Like.js'
import CustomError from '../utils/error/CustomError.js'
import StatusResponse from '../utils/StatusResponse.js'

export const likePost = async (req, res) => {
  const { post_id } = req.params
  const { user } = req.body
  let like
  try {
    like = await Like.create({
      post_id,
      user_id: user.id,
    })
  } catch (error) {
    if (error.original.code === 'ER_DUP_ENTRY') {
      throw new CustomError(409, 'You already liked the post!')
    } else {
      throw new CustomError(500, 'Something went wrong!')
    }
  }

  res.json({ ...StatusResponse(201, 'You liked a post successfully!') })
}

export const unlikePost = async (req, res) => {
  const { post_id } = req.params
  const { user } = req.body

  const like = await Like.destroy({
    where: {
      post_id,
      user_id: user.id,
    },
  })

  if (!like) {
    throw new CustomError(404, 'Like is not found!')
  }

  res.json({ ...StatusResponse(200, 'You unliked a post successfully!') })
}
