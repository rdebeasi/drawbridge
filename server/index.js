var dotenv = require('dotenv');
var httpProxy = require('http-proxy');

dotenv.config();

var idmHost = process.env.IDM_HOST;
var proxyServer;
var proxyOptions;

console.log(idmHost);

if (!idmHost) {
  console.log('Error: The IDM_HOST environment variable is not defined. Exiting.');
  return;
}

proxyOptions = {
  target: 'https://' + idmHost,
  secure: false,
  changeOrigin: true,
  // Redirect to HTTP to avoid certificate errors.
  // FOR TESTING PURPOSES ONLY. FOR CRYING OUT LOUD DO NOT DEPLOY THIS!
  // We should instead set up a self-signed cert to enable https passthrough.
  protocolRewrite: 'http',
}

// TODO: handle OPTIONS request. Do something like this: https://gist.github.com/nilcolor/816580

proxyServer = httpProxy.createProxyServer(proxyOptions);
proxyServer.listen(1337);
