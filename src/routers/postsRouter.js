import { Router } from 'express'
import {
  createPost,
  deletePost,
  getPost,
  getPostComments,
  updatePost,
} from '../controllers/postsController.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { checkToken } from '../middlewares/auth.js'
import { validate } from '../middlewares/validate.js'
import {
  createPostSchema,
  postIdParamsSchema,
  postIdSchema,
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
  [checkToken, validate(postIdSchema)],
  asyncHandler(deletePost)
)
// get Post by id
router.get('/:id', [validate(postIdParamsSchema)], asyncHandler(getPost))

// Post's comments
router.get(
  '/:id/comments',
  [validate(postIdParamsSchema)],
  asyncHandler(getPostComments)
)

export default router
