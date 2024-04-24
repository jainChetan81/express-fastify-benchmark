- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Wed Apr 24 2024 14:12:39 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                                    | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                                | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world                | 4.26.2  | ✓      | 44370.4    | 22.04        | 7.95          |
| fastify-fast-json-stringify-parser | 4.26.2  | ✓      | 20970.4    | 47.16        | 6.18          |
| express-hello-world                | 4.19.2  | ✓      | 10712.0    | 92.76        | 1.91          |
| fastify-big-json                   | 4.26.2  | ✓      | 2262.1     | 293.80       | 133.64        |
| fastify-final                      | 4.26.2  | ✓      | 1908.0     | 521.15       | 112.75        |
| express-fast-json-stringify-parser | 4.19.2  | ✓      | 1583.3     | 339.21       | 94.09         |
| express-final                      | 4.19.2  | ✓      | 1533.1     | 647.12       | 91.09         |
| express-big-json                   | 4.19.2  | ✓      | 1458.0     | 354.86       | 86.68         |
