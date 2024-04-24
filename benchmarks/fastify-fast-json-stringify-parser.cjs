"use strict";

const fastify = require("fastify")();
const { opts, getJobs } = require("./utils.cjs");
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

fastify.get("/", opts, async function (request, reply) {
	reply.send(getJobs());
});

fastify.listen({ port: 3000, host: "127.0.0.1" });
