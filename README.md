# TL;DR

- [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Tue Feb 06 2024 16:03:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                     | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                 | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world | 4.26.0  | ✓      | 42398.4    | 23.09        | 7.60          |
| express-hello-world | 4.18.2  | ✓      | 10505.6    | 94.62        | 1.87          |
| fastify-listing     | 4.26.0  | ✓      | 2237.7     | 289.37       | 132.14        |
| express-listing     | 4.18.2  | ✓      | 1776.9     | 324.72       | 105.00        |
