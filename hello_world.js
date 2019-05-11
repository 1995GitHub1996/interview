const http = require('http');
const url = require('url');
http.createServer(function (req, res) {
	arr = url.parse(req.url).pathname;
    res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Hello World\n'); 
}).listen(8088, "127.0.0.1"); 
console.log('Server running at http://127.0.0.1/8088');
