import { Router } from 'express'
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from '../controllers/postsController.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { checkToken } from '../middlewares/auth.js'
import { validate } from '../middlewares/validate.js'
import {
  createPostSchema,
  deletePostSchema,
  updatePostSchema,
} from '../schemas/post.js'

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
// delete Post
router.delete(
  '/',
  [checkToken, validate(deletePostSchema)],
  asyncHandler(deletePost)
)
// delete Post
router.get('/:id', asyncHandler(getPost))

export default router
