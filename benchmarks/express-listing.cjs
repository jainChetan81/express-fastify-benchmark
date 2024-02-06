'use strict'
const json = require('./big-json.json')

const express = require('express')
const helmet = require('helmet')
const hpp = require('hpp')
const compression = require('compression')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()

app.disable('etag')
app.disable('x-powered-by')

app.use(require('cors')())

app.get('/', function (req, res) {
  res.json(json)
})
app.use(cookieParser())
// Use helmet to secure Express with various HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
    crossOriginOpenerPolicy: false
  })
)
// Prevent HTTP parameter pollution
app.use(hpp())
// Compress all requests
app.use(compression())
// global config
// Use for http request debug (show errors only)
app.use(logger('dev', { skip: (_, res) => res.statusCode < 400 }))
app.use(express.static(path.resolve(process.cwd(), 'public')))

app.listen(8000)
