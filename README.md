- This package shows how fast it is comparatively.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

# Benchmarks

- **Machine:** darwin x64 | 8 vCPUs | 8.0GB Mem
- **Node:** `v20.11.0`
- **Run:** Tue Feb 06 2024 22:07:10 GMT+0530 (India Standard Time)
- **Method:** `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                      | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :------------------- | ------: | -----: | :--------: | -----------: | ------------: |
| fastify-hello-world  |  4.26.0 |      ✓ |  18317.0   |        54.16 |          3.22 |
| express-hello-world  |  4.18.2 |      ✓ |   4171.9   |       235.71 |          0.74 |
| fastify-listing      |  4.26.0 |      ✓ |   1179.5   |       416.00 |         69.67 |
| express-listing      |  4.18.2 |      ✓ |   752.4    |       470.12 |         44.46 |
| fastify-listing-json |  4.26.0 |      ✓ |  10056.0   |        98.83 |          2.66 |
