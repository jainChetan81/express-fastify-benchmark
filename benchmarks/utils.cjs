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

function getJobs() {
	const jobs = [];

	for (let i = 0; i < 200; i += 1) {
		jobs[i] = new Employee({
			id: i,
			title: "Testing JSON stringify performance",
			employer: "fastJson"
		});
	}
	return jobs;
}
module.exports = { opts, getJobs };
