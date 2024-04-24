"use strict";
const json = require("./big-json.json");
const { opts } = require("./schema.cjs");
const fastJson = require("fast-json-stringify");

const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

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
// Compress all requests
app.use(compression());
app.use(logger("dev", { skip: (_, res) => res.statusCode < 400 }));

// @ts-expect-error schema error
const stringify = fastJson(opts.schema.response[200].properties);
for (let i = 0; i < 50; i++) {
	app.get(`/test${i}`, async function (req, res) {
		res.send({ number: i });
	});
}

app.get("/", async function (req, res) {
	await new Promise((resolve) => setTimeout(resolve, 100));
	const body = stringify(json);
	res.set("Content-Type", "application/json");
	res.end(body);
});
app.listen(3000);
