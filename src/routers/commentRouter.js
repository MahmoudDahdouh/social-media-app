import { Router } from 'express'
import { checkToken } from '../middlewares/auth.js'
import { validate } from '../middlewares/validate.js'
import { addComment } from '../controllers/commentController.js'
import { addCommentSchema } from '../schemas/comment.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const router = Router()

router.post(
  '/',
  [checkToken, validate(addCommentSchema)],
  asyncHandler(addComment)
)

export default router
