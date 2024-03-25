import BigJson from "./benchmarks/big-json.json";
import { opts } from "./benchmarks/schema.cjs";
import fastJson from "fast-json-stringify";
const stringify = fastJson(opts.schema.response[200].properties);

console.time("JSON STRINGIFY");
for (let i = 0; i < 10000; i++) {
	JSON.stringify(BigJson);
}
console.timeEnd("JSON STRINGIFY");

console.time("FAST JSON STRINGIFY");
for (let i = 0; i < 10000; i++) {
	stringify(BigJson);
}

console.timeEnd("FAST JSON STRINGIFY");
