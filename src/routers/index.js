import { Router } from 'express'
import authRouter from './authRouter.js'
import postsRouter from './postsRouter.js'
import friendRequestRouter from './friendRequestRouter.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/posts', postsRouter)
router.use('/friend-request', friendRequestRouter)

export default router
