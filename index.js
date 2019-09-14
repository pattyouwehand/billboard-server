const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const corsMiddleware = cors()
const jsonParser = bodyParser.json()
const login = require('./auth/router')
const port = process.env.PORT || 4000

const Image = require('./image/model')
const imageRouter = require('./image/router')
const userRouter = require('./user/router')

app.get('/test', (req, res) => res.send('Hello test!'))
app.listen(port, () => console.log(`Listening to port ${port}`))

app.use(corsMiddleware)
app.use(jsonParser)
app.use(login)
app.use(imageRouter)
app.use(userRouter)