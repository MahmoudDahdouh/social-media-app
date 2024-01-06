import { Router } from 'express'
import { likePost } from '../controllers/likesController.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { checkToken } from '../middlewares/auth.js'

const router = Router()

router.post('/:post_id', [checkToken], asyncHandler(likePost))

export default router
