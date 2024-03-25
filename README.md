- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.1`
* __Run:__ Mon Mar 25 2024 18:23:42 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                      | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                  | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world  | 4.26.2  | ✓      | 44915.2    | 21.77        | 8.05          |
| fastify-listing-json | 4.26.2  | ✓      | 22300.0    | 44.34        | 5.89          |
| express-hello-world  | 4.19.2  | ✓      | 10576.8    | 93.96        | 1.89          |
| fastify-listing      | 4.26.2  | ✓      | 2322.6     | 302.11       | 137.14        |
| express-listing-json | 4.19.2  | ✓      | 2019.5     | 305.59       | 119.33        |
| express-listing      | 4.19.2  | ✓      | 1825.3     | 321.56       | 107.87        |
