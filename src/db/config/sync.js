import Block from '../models/Block.js'
import Comment from '../models/Comment.js'
import Like from '../models/Like.js'
import Post from '../models/Post.js'
import User from '../models/User.js'
import UserProfile from '../models/UserProfile.js'
import Follower from '../models/Follower.js'
const sync = async () => {
  await User.sync({ alter: true })
  await UserProfile.sync({ alter: true })
  await Post.sync({ alter: true })
  await Like.sync({ alter: true })
  await Comment.sync({ alter: true })
  await Follower.sync({ alter: true })
  await Block.sync({ alter: true })
  console.log('Database synced successfully !')
}
sync()
