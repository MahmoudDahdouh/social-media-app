const express = require('express')
const Config = require('./src/config/environment')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(Config.server.port, () => {
  console.log(`listening on port ${Config.server.port}`)
})
