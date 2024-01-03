import { Router } from 'express'
import { getUserProfile } from '../controllers/userController.js'
import { checkToken } from '../middlewares/auth.js'

const router = Router()

router.get('/', [checkToken], getUserProfile)

export default router
