# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.2`
* __Run:__ Tue Apr 23 2024 16:16:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 108.01 | 154.96 |
| 1-startup-routes.cjs | 108.92 | 119.80 |
| 10-startup-routes-schema.cjs | 111.71 | 167.81 |
| 10-startup-routes.cjs | 111.50 | 125.01 |
| 100-startup-routes-schema.cjs | 121.99 | 263.53 |
| 100-startup-routes.cjs | 122.34 | 142.89 |
| 1000-startup-routes-schema.cjs | 295.51 | 1042.20 |
| 1000-startup-routes.cjs | 291.87 | 409.31 |
| 10000-startup-routes-schema.cjs | 5757.74 | 12674.25 |
| 10000-startup-routes.cjs | 4681.54 | 6104.10 |
| startup-listen.cjs | 107.69 | 119.02 |
