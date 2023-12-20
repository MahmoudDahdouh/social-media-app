import { Router } from 'express'
import { asyncHandler } from '../utils/asyncHandler.js'
import { login, signUp } from '../controllers/authController.js'
import { validate } from '../middlewares/validate.js'
import { loginSchema } from '../schemas/auth.js'

const router = Router()

router.post('/login', validate(loginSchema), asyncHandler(login))
router.post('/sign-up', asyncHandler(signUp))

export default router
