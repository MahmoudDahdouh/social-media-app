import Block from '../models/Block.js'
import Comment from '../models/Comment.js'
import FriendRequest from '../models/FriendRequest.js'
import Like from '../models/Like.js'
import Post from '../models/Post.js'
import User from '../models/User.js'
import UserFriend from '../models/UserFriend.js'
import UserProfile from '../models/UserProfile.js'

const sync = async () => {
  await User.sync({ alter: true })
  await UserProfile.sync({ alter: true })
  await Post.sync({ alter: true })
  await Like.sync({ alter: true })
  await Comment.sync({ alter: true })
  await UserFriend.sync({ alter: true })
  await Block.sync({ alter: true })
  await FriendRequest.sync({ alter: true })
  console.log('Database synced successfully !')
}
sync()
