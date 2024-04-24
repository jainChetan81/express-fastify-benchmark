"use strict";

const { getJobs } = require("./utils.cjs");

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

app.get("/", function (req, res) {
	res.json(getJobs());
});

app.listen(3000);
