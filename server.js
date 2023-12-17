import express from 'express'
import Config from './src/config/environment.js'
import serverErrorHandler from './src/utils/error/serverErrorHandler.js'
import clientErrorHandler from './src/utils/error/clientErrorHandler.js'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// client error handler
app.use(clientErrorHandler)

// error handler
app.use(serverErrorHandler)

app.listen(Config.server.port, () => {
  console.log(`listening on port ${Config.server.port}`)
})
