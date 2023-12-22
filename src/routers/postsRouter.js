import { Router } from 'express'
import { createPost } from '../controllers/postsController.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { checkToken } from '../middlewares/auth.js'
import { validate } from '../middlewares/validate.js'
import { createPostSchema } from '../schemas/post.js'

const router = Router()

router.post(
  '/',
  [checkToken, validate(createPostSchema)],
  asyncHandler(createPost)
)

export default router
