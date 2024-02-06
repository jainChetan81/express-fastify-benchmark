# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Tue Feb 06 2024 16:20:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 115.57 | 163.00 |
| 1-startup-routes.cjs | 112.86 | 124.84 |
| 10-startup-routes-schema.cjs | 115.12 | 171.57 |
| 10-startup-routes.cjs | 118.45 | 133.20 |
| 100-startup-routes-schema.cjs | 126.75 | 267.32 |
| 100-startup-routes.cjs | 131.12 | 154.53 |
| 1000-startup-routes-schema.cjs | 310.44 | 1064.64 |
| 1000-startup-routes.cjs | 295.22 | 414.16 |
| 10000-startup-routes-schema.cjs | 4967.69 | 12255.69 |
| 10000-startup-routes.cjs | 4943.03 | 6328.05 |
| startup-listen.cjs | 115.86 | 128.18 |
