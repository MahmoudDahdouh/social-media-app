import { Router } from 'express'
import { checkToken } from '../middlewares/auth.js'
import { validate } from '../middlewares/validate.js'
import {
  addComment,
  deleteComment,
  updateComment,
} from '../controllers/commentController.js'
import {
  addCommentSchema,
  deleteCommentSchema,
  updateCommentSchema,
} from '../schemas/comment.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const router = Router()

router.post(
  '/',
  [checkToken, validate(addCommentSchema)],
  asyncHandler(addComment)
)
router.post(
  '/del',
  [checkToken, validate(deleteCommentSchema)],
  asyncHandler(deleteComment)
)
router.patch(
  '/',
  [checkToken, validate(updateCommentSchema)],
  asyncHandler(updateComment)
)
export default router
