require('babel-register')

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const StaticRouter = ReactRouter.StaticRouter
const express = require('express')
const fs = require('fs')
const _ = require('lodash')
const server = express()
const port = 3001
const baseTemplate = fs.readFileSync('./dist/index.prod.html')
const template = _.template(baseTemplate)
const App = require('./src/App').default


if (process.env.NODE_ENV === 'server') {
  server.use('/assets', express.static('./public'))
}

server.use((req, res) => {
  const context = {}
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context: context },
      React.createElement(App)
    )
  )

  res.write(template({ body: body }))
  res.end()
})
// app.get('*', (req, res) => {
//   console.log(`${req.method} ${req.url}`)
//   res.send(template())
// })

server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
