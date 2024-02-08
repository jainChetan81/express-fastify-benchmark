- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Thu Feb 08 2024 07:38:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                      | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                  | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world  | 4.26.0  | ✓      | 42795.2    | 22.87        | 7.67          |
| fastify-listing-json | 4.26.0  | ✓      | 22088.4    | 44.76        | 5.84          |
| express-hello-world  | 4.18.2  | ✓      | 10393.6    | 95.63        | 1.85          |
| fastify-listing      | 4.26.0  | ✓      | 2224.5     | 291.03       | 131.35        |
| express-listing      | 4.18.2  | ✓      | 1780.9     | 324.22       | 105.24        |
