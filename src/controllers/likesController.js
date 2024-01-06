import Like from '../db/models/Like.js'
import CustomError from '../utils/error/CustomError.js'

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
      return res.send('you already liked the post')
    } else {
      throw new CustomError(500, 'Something went wrong!')
    }
  }

  res.json({ like })
}
