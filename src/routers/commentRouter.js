import { Router } from 'express'
import { checkToken } from '../middlewares/auth.js'
import { validate } from '../middlewares/validate.js'
import { addComment, deleteComment } from '../controllers/commentController.js'
import { addCommentSchema, deleteCommentSchema } from '../schemas/comment.js'
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
export default router
