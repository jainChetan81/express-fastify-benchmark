'use strict'

const fastify = require('fastify')()
const json = require('./big-json.json')
const fastifyApp = require('fastify')()
const path = require('path')

fastifyApp.register(require('@fastify/helmet'), {
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: false,
  crossOriginOpenerPolicy: false,
  global: true
})

// Compress all requests
fastifyApp.register(require('@fastify/compress'), { global: false })

// Use for http request debug (show errors only)
fastifyApp.register(require('@fastify/static'), {
  root: path.join(process.cwd(), 'public'),
  wildcard: false,
  prefix: '/' // optional: default '/'
})
fastify.get('/', function (request, reply) {
  reply.send(json)
})

fastify.listen({ port: 3000, host: '127.0.0.1' })
