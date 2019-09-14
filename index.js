const express = require('express')
const app = express()
const port = 4000

db
  .sync({ force: false })
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

app.get('/test', (req, res) => res.send('Hello test!'))
app.listen(port, () => console.log(`Listening to port ${port}`))