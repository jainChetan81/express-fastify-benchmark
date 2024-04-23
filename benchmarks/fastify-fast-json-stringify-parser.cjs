"use strict";

const fastify = require("fastify")();
const fastifyApp = require("fastify")();
const path = require("path");

fastifyApp.register(require("@fastify/helmet"), {
	contentSecurityPolicy: false,
	crossOriginEmbedderPolicy: false,
	crossOriginResourcePolicy: false,
	crossOriginOpenerPolicy: false,
	global: true
});

// Compress all requests
fastifyApp.register(require("@fastify/compress"), { global: false });

const opts = {
	schema: {
		response: {
			200: {
				type: "array",
				items: {
					type: "object",
					properties: {
						id: { type: "integer" },
						title: { type: "string" },
						employer: { type: "string" }
					}
				}
			}
		}
	}
};

function Employee({ id = 0, title = "", employer = "" } = {}) {
	this.id = id;
	this.title = title;
	this.employer = employer;
}
fastify.get("/", opts, function (request, reply) {
	const jobs = [];

	for (let i = 0; i < 200; i += 1) {
		jobs[i] = new Employee({
			id: i,
			title: "Testing JSON stringify performance",
			employer: "fastJson"
		});
	}
	reply.send(jobs);
});

fastify.listen({ port: 3000, host: "127.0.0.1" });
