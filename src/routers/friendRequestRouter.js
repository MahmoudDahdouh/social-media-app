import { Router } from 'express'
import { createFriendRequest } from '../controllers/friendRequestsController.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { validate } from '../middlewares/validate.js'
import { checkToken } from '../middlewares/auth.js'
import { targetIdtSchema } from '../schemas/friendRequest.js'

const router = Router()

// create new friend request
router.post(
  '/create',
  [checkToken, validate(targetIdtSchema)],
  asyncHandler(createFriendRequest)
)

export default router
