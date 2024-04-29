- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Mon Apr 29 2024 00:23:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                                    | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                                | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world                | 4.26.2  | ✓      | 45345.6    | 21.56        | 8.13          |
| fastify-fast-json-stringify-parser | 4.26.2  | ✓      | 21861.2    | 45.22        | 6.44          |
| fastify-final                      | 4.26.2  | ✓      | 15098.0    | 65.70        | 4.45          |
| express-hello-world                | 4.19.2  | ✓      | 10728.4    | 92.62        | 1.91          |
| fastify-big-json                   | 4.26.2  | ✓      | 2306.8     | 295.47       | 136.29        |
| express-fast-json-stringify-parser | 4.19.2  | ✓      | 1583.8     | 339.27       | 94.12         |
| express-final                      | 4.19.2  | ✓      | 1544.0     | 626.85       | 91.75         |
| express-big-json                   | 4.19.2  | ✓      | 1467.8     | 359.22       | 87.26         |
