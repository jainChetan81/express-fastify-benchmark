- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Wed Apr 24 2024 15:32:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                                    | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                                | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world                | 4.26.2  | ✓      | 45140.0    | 21.65        | 8.09          |
| fastify-fast-json-stringify-parser | 4.26.2  | ✓      | 21077.6    | 46.92        | 6.21          |
| fastify-final                      | 4.26.2  | ✓      | 14716.2    | 67.42        | 4.34          |
| express-hello-world                | 4.19.2  | ✓      | 10702.4    | 92.82        | 1.91          |
| fastify-big-json                   | 4.26.2  | ✓      | 2277.5     | 296.23       | 134.56        |
| express-fast-json-stringify-parser | 4.19.2  | ✓      | 1579.7     | 346.55       | 93.87         |
| express-final                      | 4.19.2  | ✓      | 1520.8     | 631.58       | 90.36         |
| express-big-json                   | 4.19.2  | ✓      | 1428.3     | 362.15       | 84.91         |
