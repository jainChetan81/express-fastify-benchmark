"use strict";

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
app.get("/", function (req, res) {
	const jobs = [];

	for (let i = 0; i < 200; i += 1) {
		jobs[i] = new Employee({
			id: i,
			title: "Testing JSON stringify performance",
			employer: "fastJson"
		});
	}
	res.send(jobs);
});

app.listen(3000);
