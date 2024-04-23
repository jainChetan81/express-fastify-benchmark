"use strict";

const { opts } = require("./schema.cjs");

const fastify = require("fastify")();
const json = require("./big-json.json");
const fastifyApp = require("fastify")();
const path = require("path");

fastifyApp.register(require("@fastify/helmet"), {
	contentSecurityPolicy: false,
	crossOriginEmbedderPolicy: false,
	crossOriginResourcePolicy: false,
	crossOriginOpenerPolicy: false,
	global: true
});

fastifyApp.register(require("@fastify/compress"), { global: false });

fastifyApp.register(require("@fastify/static"), {
	root: path.join(process.cwd(), "public"),
	wildcard: false
});

for (let i = 0; i < 50; i++) {
	fastify.get(`/test${i}`, async function (req, res) {
		res.send({ number: i });
	});
}

fastify.get("/", opts, async function (request, reply) {
	await new Promise((resolve) => setTimeout(resolve, 100));
	reply.send(json);
});

fastify.listen({ port: 3000, host: "127.0.0.1" });
