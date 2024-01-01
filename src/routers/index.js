import { Router } from 'express'
import authRouter from './authRouter.js'
import postsRouter from './postsRouter.js'
import followerRouter from './followerRouter.js'
import commentsRouter from './commentRouter.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/posts', postsRouter)
router.use('/user', followerRouter)
router.use('/comments', commentsRouter)

export default router
