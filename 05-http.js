const http = require('http');

//  createServer is a non-blocking async API
//  all it does is, as soon as the request arrives
//  creates a function and hands it over to libuv (C++)
//  to process it.
//  If libuv has a response ready for a request,
//  it passes the callback to the I/O queue from where
//  createServer serves it.
//  this way, createServer API's task only two fold,
//  one, hand over the callback to libuv; and two, when
//  the response is ready, serve it.
//  This way, the server is extremely efficient even with
//  single threaded execution. Processing the request and preparing
//  response obviously takes time, but it is done by libuv functions
//  that are inherently asynchronous (written in C++)
//  All the Node core modules follow this pattern.
http
  .createServer((req, res) => {
    console.log('Request arrived');
    res.writeHead(200);
    res.write('Hello');
    res.end();
  })
  .listen(3000);
