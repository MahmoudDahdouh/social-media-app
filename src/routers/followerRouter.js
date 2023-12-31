import { Router } from 'express'

import { asyncHandler } from '../utils/asyncHandler.js'
import { checkToken } from '../middlewares/auth.js'
import {
  getAllFollowers,
  getAllFollowings,
} from '../controllers/followerController.js'
import { validate } from '../middlewares/validate.js'
import { pagination } from '../schemas/general.js'

const router = Router()

// get all followers
router.get(
  '/followers',
  [checkToken, validate(pagination)],
  asyncHandler(getAllFollowers)
)

export default router
