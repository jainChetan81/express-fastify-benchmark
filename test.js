console.time("JSON STRINGIFY");
import BigJson from "./benchmarks/big-json.json";
import { opts } from "./benchmarks/schema.cjs";
for (let i = 0; i < 1000; i++) {
	JSON.stringify(BigJson);
}
console.timeEnd("JSON STRINGIFY");

console.time("FAST JSON STRINGIFY");
import fastJson from "fast-json-stringify";
const stringify = fastJson(opts);

for (let i = 0; i < 1000; i++) {
	stringify(BigJson);
}

console.timeEnd("FAST JSON STRINGIFY");
