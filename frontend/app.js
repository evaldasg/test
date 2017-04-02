require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const StaticRouter = ReactRouter.StaticRouter
const _ = require('lodash')
const fs = require('fs')
const port = 3001
const indexHtml= (process.env.NODE_ENV === 'development') ? 'dist/index.dev' : 'public/index.prod'
const baseTemplate = fs.readFileSync(`./${indexHtml}.html`)
const template = _.template(baseTemplate)
const App = require('./src/App').default

const server = express()

if (process.env.NODE_ENV === 'development') {
  server.use('/assets', express.static('./dist'))

  const httpProxy = require('http-proxy')
  const apiProxy = httpProxy.createProxyServer()
  const apiServer = 'http://localhost:3000'

  server.all('/api/*', (req, res) => {
    console.log(`[${process.env.NODE_ENV}] ${req.method} for ${req.url}`)
    apiProxy.web(req, res, {target: apiServer});
  })
}

server.use((req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${process.env.NODE_ENV}] ${req.method} for ${req.url}`)
  }
  const context = {}
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context: context },
      React.createElement(App)
    )
  )

  res.write(template({ body: body }))
  res.end()
})

server.listen(port, () => {
  console.log(`Listening on port ${port} NODE_ENV: [${process.env.NODE_ENV}].`)
})
