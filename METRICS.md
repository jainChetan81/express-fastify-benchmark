# Metrics
* __Machine:__ darwin x64 | 8 vCPUs | 8.0GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Tue Feb 06 2024 19:56:58 GMT+0530 (India Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes.cjs | 172.05 | 191.05 |
| 10-startup-routes.cjs | 182.76 | 204.57 |
| 100-startup-routes.cjs | 196.35 | 227.66 |
| 1000-startup-routes.cjs | 463.26 | 608.29 |
| startup-listen.cjs | 212.49 | 230.96 |
