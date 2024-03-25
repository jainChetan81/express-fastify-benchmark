- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.1`
* __Run:__ Mon Mar 25 2024 10:53:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                      | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                  | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world  | 4.26.2  | ✓      | 42914.4    | 22.81        | 7.69          |
| fastify-listing-json | 4.26.2  | ✓      | 22062.4    | 44.82        | 5.83          |
| express-hello-world  | 4.19.1  | ✓      | 10539.8    | 94.26        | 1.88          |
| fastify-listing      | 4.26.2  | ✓      | 2271.4     | 296.87       | 134.12        |
| express-listing-json | 4.19.1  | ✓      | 1980.2     | 306.41       | 117.01        |
| express-listing      | 4.19.1  | ✓      | 1803.7     | 319.95       | 106.58        |
