const express = require('express')
const fs = require('fs')
const _ = require('lodash')
const app = express()
const port = 3001
const baseTemplate = fs.readFileSync('./dist/index.prod.html')
const template = _.template(baseTemplate)


if (process.env.NODE_ENV === 'development') {
  app.use('/assets', express.static('./public'))
}

app.get('*', (req, res) => {
  console.log(`${req.method} ${req.url}`)
  res.send(template())
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
