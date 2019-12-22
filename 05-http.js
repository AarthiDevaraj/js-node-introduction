const http = require('http');

http
  .createServer((req, res) => {
    console.log('Request arrived');
    res.writeHead(200);
    res.write('Hello');
    res.end();
  })
  .listen(3000);
