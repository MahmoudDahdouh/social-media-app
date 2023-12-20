import express from 'express'
import Config from './src/config/environment.js'
import ErrorHandler from './src/utils/error/ErrorHandler.js'

import apiRouter from './src/routers/index.js'
import { NotFound } from './src/utils/error/NotFoundError.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// use api router
app.use('/api/v1/', apiRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// not found
app.all('*', NotFound)

// error handler
app.use(ErrorHandler)

app.listen(Config.server.port, () => {
  console.log(`listening on port ${Config.server.port}`)
})
