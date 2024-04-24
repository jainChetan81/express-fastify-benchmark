# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Wed Apr 24 2024 10:57:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 102.24 | 145.36 |
| 1-startup-routes.cjs | 102.83 | 113.09 |
| 10-startup-routes-schema.cjs | 101.60 | 153.36 |
| 10-startup-routes.cjs | 105.30 | 117.72 |
| 100-startup-routes-schema.cjs | 116.52 | 252.26 |
| 100-startup-routes.cjs | 115.46 | 135.65 |
| 1000-startup-routes-schema.cjs | 273.34 | 991.15 |
| 1000-startup-routes.cjs | 264.89 | 374.03 |
| 10000-startup-routes-schema.cjs | 4633.16 | 11203.10 |
| 10000-startup-routes.cjs | 4497.99 | 5766.19 |
| startup-listen.cjs | 106.58 | 117.57 |
