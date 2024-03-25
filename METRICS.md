# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Thu Feb 08 2024 07:33:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 105.86 | 149.44 |
| 1-startup-routes.cjs | 111.56 | 122.65 |
| 10-startup-routes-schema.cjs | 110.40 | 163.26 |
| 10-startup-routes.cjs | 110.14 | 123.87 |
| 100-startup-routes-schema.cjs | 120.89 | 255.18 |
| 100-startup-routes.cjs | 123.92 | 145.96 |
| 1000-startup-routes-schema.cjs | 289.63 | 1016.43 |
| 1000-startup-routes.cjs | 268.83 | 380.66 |
| 10000-startup-routes-schema.cjs | 4656.54 | 11526.87 |
| 10000-startup-routes.cjs | 4564.75 | 5953.77 |
| startup-listen.cjs | 105.50 | 117.59 |
