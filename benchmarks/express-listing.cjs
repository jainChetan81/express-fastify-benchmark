'use strict'
const json = require('./big-json.json')

const express = require('express')

const app = express()

app.disable('etag')
app.disable('x-powered-by')

app.use(require('cors')())

app.get('/', function (req, res) {
  res.json(json)
})

app.listen(8000)
