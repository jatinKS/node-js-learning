const http = require('http');

//create server
http.createServer((req, res) => {
    res.write('<h1>Hello browser from the Node</h1>');
    res.end();
}).listen('5000', () => console.log('Server running....'));