- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Thu Feb 08 2024 07:28:26 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                      | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                  | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world  | 4.26.0  | ✓      | 40920.0    | 23.94        | 7.34          |
| fastify-listing-json | 4.26.0  | ✓      | 22046.4    | 44.84        | 5.82          |
| express-hello-world  | 4.18.2  | ✓      | 10403.6    | 95.54        | 1.86          |
| fastify-listing      | 4.26.0  | ✓      | 2208.2     | 292.94       | 130.40        |
| express-listing      | 4.18.2  | ✓      | 1748.7     | 330.01       | 103.34        |
