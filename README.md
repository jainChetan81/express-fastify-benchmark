# TL;DR

- [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

- **Machine:** darwin x64 | 8 vCPUs | 8.0GB Mem
- **Node:** `v20.11.0`
- **Run:** Tue Feb 06 2024 20:00:16 GMT+0530 (India Standard Time)
- **Method:** `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                     | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :------------------ | ------: | -----: | :--------: | -----------: | ------------: |
| fastify-hello-world |  4.26.0 |      ✓ |  18317.0   |        54.16 |          3.28 |
| express-hello-world |  4.18.2 |      ✓ |   4413.4   |       226.85 |          0.79 |
| fastify-listing     |  4.26.0 |      ✓ |   1239.8   |       386.13 |         73.23 |
| express-listing     |  4.18.2 |      ✓ |   752.4    |       470.12 |         44.46 |
