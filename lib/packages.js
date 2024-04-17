"use strict";

import pkgJson from "../package.json" assert { type: "json" };
import { createRequire } from "module";
import path from "path";

const packages = {
	"express-hello-world": { extra: true, package: "express", hasRouter: true },
	"fastify-hello-world": {
		extra: true,
		package: "fastify",
		checked: true,
		hasRouter: true
	},
	"express-big-json": { extra: true, package: "express", hasRouter: true },
	"fastify-big-json": { extra: true, package: "fastify", hasRouter: true },
	"express-fast-json-stringify-parser": { extra: true, package: "express", hasRouter: true },
	"fastify-fast-json-stringify-parser": { extra: true, package: "fastify", hasRouter: true }
};

const require = createRequire(import.meta.url);

const _choices = [];
Object.keys(packages).forEach((pkg) => {
	if (!packages[pkg].version) {
		const module = pkgJson.dependencies[pkg] ? pkg : packages[pkg].package;
		const version = require(path.resolve(`node_modules/${module}/package.json`)).version;
		packages[pkg].version = version;
	}
	_choices.push(pkg);
});

export const choices = _choices.sort();
export function list(extra = false) {
	return _choices
		.map((c) => {
			return extra === !!packages[c].extra ? Object.assign({}, packages[c], { name: c }) : null;
		})
		.filter((c) => c);
}
export function info(module) {
	return packages[module];
}
