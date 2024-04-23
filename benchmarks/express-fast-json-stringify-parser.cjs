"use strict";
const opts = {
	type: "array",
	items: {
		type: "object",
		properties: {
			id: { type: "integer" },
			title: { type: "string" },
			employer: { type: "string" }
		}
	}
};
const fastJson = require("fast-json-stringify");

const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.disable("etag");
app.disable("x-powered-by");

app.use(require("cors")());

app.use(cookieParser());
// Use helmet to secure Express with various HTTP headers
app.use(
	// @ts-ignore
	helmet({
		contentSecurityPolicy: false,
		crossOriginEmbedderPolicy: false,
		crossOriginResourcePolicy: false,
		crossOriginOpenerPolicy: false
	})
);
// Prevent HTTP parameter pollution
// Compress all requests
app.use(compression());
// global config
// Use for http request debug (show errors only)
app.use(logger("dev", { skip: (_, res) => res.statusCode < 400 }));

function Employee({ id = 0, title = "", employer = "" } = {}) {
	this.id = id;
	this.title = title;
	this.employer = employer;
}
const stringify = fastJson(opts);

for (let i = 0; i < 200; i++) {
	app.get(`/test${i}`, async function (req, res) {
		res.send({ number: i });
	});
}

app.get("/", async function (req, res) {
	await new Promise((resolve) => setTimeout(() => resolve, 200));
	const jobs = [];

	for (let i = 0; i < 200; i += 1) {
		jobs[i] = new Employee({
			id: i,
			title: "Testing JSON stringify performance",
			employer: "fastJson"
		});
	}
	const body = stringify(jobs);
	res.set("Content-Type", "application/json");
	res.end(body);
});

app.listen(3000);
