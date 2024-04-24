"use strict";

const fastify = require("fastify")();
const { opts, json } = require("./complex.cjs");
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

for (let i = 0; i < 100; i++) {
	fastify.get(`/test${i}`, async function (req, res) {
		res.send({ number: i });
	});
}

fastify.get("/", async function (request, reply) {
	await new Promise((resolve) => setTimeout(resolve, 100));
	reply.send(json);
});

fastify.listen({ port: 3000 });
