import { Router } from 'express'
import authRouter from './authRouter.js'
import postsRouter from './postsRouter.js'
import followerRouter from './followerRouter.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/posts', postsRouter)
router.use('/user', followerRouter)

export default router
