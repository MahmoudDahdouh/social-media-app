import { Router } from 'express'
import { createPost, updatePost } from '../controllers/postsController.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { checkToken } from '../middlewares/auth.js'
import { validate } from '../middlewares/validate.js'
import { createPostSchema, updatePostSchema } from '../schemas/post.js'

const router = Router()

// create new Post
router.post(
  '/',
  [checkToken, validate(createPostSchema)],
  asyncHandler(createPost)
)

// update Post
router.patch(
  '/:id',
  [checkToken, validate(updatePostSchema)],
  asyncHandler(updatePost)
)

export default router
