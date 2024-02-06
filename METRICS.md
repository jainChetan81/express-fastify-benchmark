# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Tue Feb 06 2024 16:41:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 108.04 | 152.02 |
| 1-startup-routes.cjs | 107.94 | 119.05 |
| 10-startup-routes-schema.cjs | 111.14 | 164.48 |
| 10-startup-routes.cjs | 109.22 | 123.00 |
| 100-startup-routes-schema.cjs | 122.06 | 258.92 |
| 100-startup-routes.cjs | 121.04 | 141.89 |
| 1000-startup-routes-schema.cjs | 300.38 | 1043.20 |
| 1000-startup-routes.cjs | 279.30 | 389.00 |
| 10000-startup-routes-schema.cjs | 4850.45 | 11640.89 |
| 10000-startup-routes.cjs | 4643.85 | 5908.99 |
| startup-listen.cjs | 110.04 | 121.66 |
