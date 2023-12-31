import { Router } from 'express'

import { asyncHandler } from '../utils/asyncHandler.js'
import { checkToken } from '../middlewares/auth.js'
import {
  getAllFollowers,
  getAllFollowings,
  followUser,
  unfollowUser,
} from '../controllers/followerController.js'
import { validate } from '../middlewares/validate.js'
import { pagination } from '../schemas/general.js'
import { followerIdSchema } from '../schemas/follower.js'

const router = Router()

// get all followers
router.get(
  '/followers',
  [checkToken, validate(pagination)],
  asyncHandler(getAllFollowers)
)

// get all following
router.get(
  '/following',
  [checkToken, validate(pagination)],
  asyncHandler(getAllFollowings)
)

// follow a user
router.post(
  '/follow',
  [checkToken, validate(followerIdSchema)],
  asyncHandler(followUser)
)

// unfollow a user
router.post(
  '/unfollow',
  [checkToken, validate(followerIdSchema)],
  asyncHandler(unfollowUser)
)
export default router
