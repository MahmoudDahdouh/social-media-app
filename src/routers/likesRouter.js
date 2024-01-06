import { Router } from 'express'
import { likePost, unlikePost } from '../controllers/likesController.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { checkToken } from '../middlewares/auth.js'

const router = Router()

router.post('/:post_id', [checkToken], asyncHandler(likePost))
router.delete('/:post_id', [checkToken], asyncHandler(unlikePost))

export default router
