import fastJson from "fast-json-stringify";

const opts = {
	schema: {
		response: {
			200: {
				type: "array",
				items: {
					type: "object",
					properties: {
						id: { type: "integer" },
						title: { type: "string" },
						employer: { type: "string" }
					}
				}
			}
		}
	}
};
function Employee({ id = 0, title = "", employer = "" } = {}) {
	this.id = id;
	this.title = title;
	this.employer = employer;
}
const jobs = [];

for (let i = 0; i < 50; i += 1) {
	jobs[i] = new Employee({
		id: i,
		title: "Testing JSON stringify performance",
		employer: "fastJson"
	});
}
const stringify = fastJson(opts.schema.response[200]);

console.time("FAST JSON STRINGIFY");
for (let i = 0; i < 100000; i++) {
	stringify(jobs);
}
console.timeEnd("FAST JSON STRINGIFY");

console.time("JSON STRINGIFY");
for (let i = 0; i < 100000; i++) {
	JSON.stringify(jobs);
}
console.timeEnd("JSON STRINGIFY");
