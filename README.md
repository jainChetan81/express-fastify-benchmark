- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Tue Apr 23 2024 14:26:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                                    | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                                | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world                | 4.26.2  | ✓      | 42006.4    | 23.30        | 7.53          |
| fastify-big-json                   | 4.26.2  | ✓      | 10715.6    | 92.72        | 160.07        |
| express-hello-world                | 4.19.2  | ✓      | 10244.0    | 97.03        | 1.83          |
| fastify-fast-json-stringify-parser | 4.26.2  | ✓      | 10006.2    | 99.35        | 149.46        |
| express-fast-json-stringify-parser | 4.19.2  | ✓      | 4159.1     | 232.78       | 63.61         |
| express-big-json                   | 4.19.2  | ✓      | 3861.0     | 248.69       | 58.98         |
