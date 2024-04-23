- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Tue Apr 23 2024 14:47:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                                    | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                                | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world                | 4.26.2  | ✓      | 41996.8    | 23.31        | 7.53          |
| fastify-big-json                   | 4.26.2  | ✓      | 10677.2    | 93.11        | 159.51        |
| express-hello-world                | 4.19.2  | ✓      | 10397.8    | 95.58        | 1.85          |
| express-big-json                   | 4.19.2  | ✓      | 3959.1     | 243.16       | 60.48         |
| express-fast-json-stringify-parser | 4.19.2  | ✓      | N/A        | N/A          | N/A           |
| fastify-fast-json-stringify-parser | 4.26.2  | ✓      | N/A        | N/A          | N/A           |
