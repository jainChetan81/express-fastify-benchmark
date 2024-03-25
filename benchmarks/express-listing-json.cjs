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

app.disable("etag");
app.disable("x-powered-by");

app.use(require("cors")());
const stringify = fastJson(opts.schema.response[200].properties);

app.get("/", function (req, res) {
	const body = stringify(json);
	res.set("Content-Type", "application/json");
	res.end(body);
});
app.use(cookieParser());
// Use helmet to secure Express with various HTTP headers
app.use(
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
app.use(express.static(path.resolve(process.cwd(), "public")));

app.listen(3000);
