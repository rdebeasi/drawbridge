# Drawbridge server

> A proxy server to connect the client to the IDM

Right now, this is just a simple proxy using [node-http-proxy](https://github.com/nodejitsu/node-http-proxy). Eventually, it will provide a subset of the IDM's API, leaving out unnecessary functionality for added security.

## Running

```
npm install
npm start
```

IDM hostname can be configured by the IDM_HOST environment variable. This environment variable can be specified via [dotenv](https://github.com/motdotla/dotenv) or by a "real" environment variable.
