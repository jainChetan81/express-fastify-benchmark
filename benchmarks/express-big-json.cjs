"use strict";

const { getJobs } = require("./utils.cjs");

const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.use(require("cors")());

app.get("/", function (req, res) {
	res.json(getJobs());
});
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

app.listen(3000);
