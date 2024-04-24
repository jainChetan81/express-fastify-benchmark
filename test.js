import { opts, getJobs } from "./benchmarks/utils.cjs";
import fastJson from "fast-json-stringify";
// @ts-ignore
const stringify = fastJson(opts.schema.response[200]);

console.time("JSON STRINGIFY");
for (let i = 0; i < 100000; i++) {
	JSON.stringify(getJobs());
}
console.timeEnd("JSON STRINGIFY");

console.time("FAST JSON STRINGIFY");
for (let i = 0; i < 100000; i++) {
	stringify(getJobs());
}

console.timeEnd("FAST JSON STRINGIFY");
