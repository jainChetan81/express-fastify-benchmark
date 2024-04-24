- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Wed Apr 24 2024 03:26:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                                    | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                                | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world                | 4.26.2  | ✓      | 44746.4    | 21.85        | 8.02          |
| express-hello-world                | 4.19.2  | ✓      | 10531.6    | 94.37        | 1.88          |
| fastify-fast-json-stringify-parser | 4.26.2  | ✓      | 8816.8     | 112.78       | 2.33          |
| fastify-big-json                   | 4.26.2  | ✓      | 2313.1     | 300.94       | 136.60        |
| express-big-json                   | 4.19.2  | ✓      | 1818.5     | 322.93       | 107.45        |
| express-fast-json-stringify-parser | 4.19.2  | ✓      | 1752.9     | 566.77       | 103.59        |
