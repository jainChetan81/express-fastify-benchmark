# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Tue Feb 06 2024 16:10:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 110.05 | 155.04 |
| 1-startup-routes.cjs | 107.69 | 119.07 |
| 10-startup-routes-schema.cjs | 110.81 | 164.13 |
| 10-startup-routes.cjs | 110.16 | 123.96 |
| 100-startup-routes-schema.cjs | 121.62 | 258.67 |
| 100-startup-routes.cjs | 121.99 | 144.57 |
| 1000-startup-routes-schema.cjs | 292.31 | 1023.05 |
| 1000-startup-routes.cjs | 277.31 | 391.54 |
| 10000-startup-routes-schema.cjs | 4956.00 | 11869.55 |
| 10000-startup-routes.cjs | 5280.09 | 6610.32 |
| startup-listen.cjs | 110.89 | 122.76 |
