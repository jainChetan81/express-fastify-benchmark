<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Installing

```
npm i -g fastify-benchmarks
```

# Usage

```
benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ darwin x64 | 8 vCPUs | 8.0GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Tue Feb 06 2024 19:22:28 GMT+0530 (India Standard Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:8000` (two rounds; one to warm-up, one to measure)

|                     | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                 | --:     | --:    | :-:        | --:          | --:           |
| fastify-hello-world | 4.26.0  | ✓      | 15355.3    | 64.74        | 2.75          |
| fastify-listing     | 4.26.0  | ✓      | 6732.5     | 147.81       | 77.46         |
| express-hello-world | 4.18.2  | ✓      | 6465.8     | 153.91       | 1.15          |
| express-listing     | 4.18.2  | ✓      | 5184.6     | 192.75       | 1.08          |
