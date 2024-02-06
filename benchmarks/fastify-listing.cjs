'use strict'

const fastify = require('fastify')()
const json = require('./big-json.json')
fastify.get('/', function (request, reply) {
  reply.send(json)
})

fastify.listen({ port: 8000, host: '127.0.0.1' })
