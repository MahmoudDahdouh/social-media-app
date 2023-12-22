import { Router } from 'express'
import authRouter from './authRouter.js'
import postsRouter from './postsRouter.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/posts', postsRouter)

export default router
