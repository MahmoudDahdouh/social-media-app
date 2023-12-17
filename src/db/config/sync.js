import Block from '../models/Block.js'
import Comment from '../models/Comment.js'
import FriendRequest from '../models/FriendRequest.js'
import Like from '../models/Like.js'
import Post from '../models/Post.js'
import User from '../models/User.js'
import UserFriend from '../models/UserFriend.js'
import UserProfile from '../models/UserProfile.js'

const sync = async () => {
  await User.sync({ force: true })
  await UserProfile.sync({ force: true })
  await Post.sync({ force: true })
  await Like.sync({ force: true })
  await Comment.sync({ force: true })
  await UserFriend.sync({ force: true })
  await Block.sync({ force: true })
  await FriendRequest.sync({ force: true })
  console.log('Database synced successfully !')
}
sync()
