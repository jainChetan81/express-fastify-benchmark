"use strict";

const { opts, getJobs } = require("./utils.cjs");
const fastJson = require("fast-json-stringify");

const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.use(require("cors")());
app.use(cookieParser());
app.use(
	// @ts-ignore
	helmet({
		contentSecurityPolicy: false,
		crossOriginEmbedderPolicy: false,
		crossOriginResourcePolicy: false,
		crossOriginOpenerPolicy: false
	})
);
app.use(compression());
app.use(logger("dev", { skip: (_, res) => res.statusCode < 400 }));

// @ts-ignore
const stringify = fastJson(opts.schema.response[200]);

app.get("/", async function (req, res) {
	const body = stringify(getJobs());
	res.set("Content-Type", "application/json");
	res.end(body);
});

app.listen(3000);
