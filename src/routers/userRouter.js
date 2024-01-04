import { Router } from 'express'
import { asyncHandler } from '../utils/asyncHandler.js'

import {
  getUserProfile,
  getUserProfileByUsername,
} from '../controllers/userController.js'
import { checkToken } from '../middlewares/auth.js'

const router = Router()

router.get('/', [checkToken], asyncHandler(getUserProfile))
router.get('/:username', asyncHandler(getUserProfileByUsername))

export default router
