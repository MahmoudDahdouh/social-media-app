import { Router } from 'express'
import authRouter from './authRouter.js'
import postsRouter from './postsRouter.js'
import followerRouter from './followerRouter.js'
import commentsRouter from './commentRouter.js'
import userRouter from './userRouter.js'
import likesRouter from './likesRouter.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/posts', postsRouter)
router.use('/user', followerRouter)
router.use('/user', userRouter)
router.use('/comments', commentsRouter)
router.use('/like', likesRouter)

export default router
