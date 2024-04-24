import { opts, json } from "./benchmarks/simple.cjs";
import fastJson from "fast-json-stringify";
// @ts-ignore
const stringify = fastJson(opts.schema.response[200]);

console.time("JSON STRINGIFY");
for (let i = 0; i < 100000; i++) {
	JSON.stringify(json);
}
console.timeEnd("JSON STRINGIFY");

console.time("FAST JSON STRINGIFY");
for (let i = 0; i < 100000; i++) {
	stringify(json);
}

console.timeEnd("FAST JSON STRINGIFY");
