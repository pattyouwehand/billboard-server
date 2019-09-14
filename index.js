const express = require('express')
const app = express()

const port = 4000
const db = require('./db')

const Image = require('./image/model')
const imageRouter = require('./image/router')


db
  .sync({ force: false })
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

app.use(imageRouter)
app.get('/test', (req, res) => res.send('Hello test!'))
app.listen(port, () => console.log(`Listening to port ${port}`))