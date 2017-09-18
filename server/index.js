var dotenv = require('dotenv');
var http = require('http');
var httpProxy = require('http-proxy');

dotenv.config();

var idmHost = process.env.IDM_HOST;
var clientHost= process.env.CLIENT_HOST;
var proxy;
var proxyOptions;
var server;

if (!idmHost) {
  console.log('Error: The IDM_HOST environment variable is not defined. Exiting.');
  return;
}
if (!clientHost) {
  console.log('Error: The CLIENT_HOST environment variable is not defined. Exiting.');
  return;
}

proxyOptions = {
  secure: false,
  changeOrigin: true,
  // Redirect to HTTP to avoid certificate errors.
  // We should set up HTTPS in an OpenShift route to ensure that passwords
  // aren't sent in the clear.
  protocolRewrite: 'http',
}

// Add Access-Control-Allow-Origin header & options response to allow CORS.

proxy = httpProxy.createProxyServer(proxyOptions);
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  console.log('proxy req');
  // TODO: only allow client host
  res.setHeader('Access-Control-Allow-Origin', '*');
});

var server = http.createServer(function(req, res) {
  if (req.method === 'OPTIONS') {
    var headers = {};
    headers["Access-Control-Allow-Origin"] = '*';
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
    res.writeHead(200, headers);
    res.end();
    return;
  }
  // Non-options request; let the IDM handle it
  proxy.web(req, res, {
    target: 'https://' + idmHost
  });
});

console.log('Listening on Port 1337.');
server.listen(1337);
