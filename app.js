const http = require('http');
http.createServer((res, req) => {
    res.write('hello world');
    res.end();
}).listen(6032);