"use strict";

const fastify = require("fastify")();
const { json } = require("./complex.cjs");
const fastifyApp = require("fastify")();

fastify.register(require("@fastify/cors"));
fastify.register(require("@fastify/cookie"));
fastifyApp.register(require("@fastify/helmet"), {
	contentSecurityPolicy: false,
	crossOriginEmbedderPolicy: false,
	crossOriginResourcePolicy: false,
	crossOriginOpenerPolicy: false,
	global: true
});
fastifyApp.register(require("@fastify/compress"), { global: true });

fastify.get("/", function (request, reply) {
	reply.send(json);
});

fastify.listen({ port: 3000 });
