const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // if(req.url == '/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'), (err,content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {'content-type':'text/html'});
    //         res.end(content);
    //     });
    // }else if(req.url == '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'), (err,content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {'content-type':'text/html'});
    //         res.end(content);
    //     });
    // }else if(req.url == '/api/users'){
    //     const users = [
    //         {name: 'Jatin',age: 27},
    //         {name: 'Bhanu',age: 30}
    //     ];
    //     res.writeHead(200, {'content-type':'text/json'});
    //     res.end(JSON.stringify(users));
    // }
    let filePath = path.join(__dirname,'public', req.url=="/"?'index.html':req.url);

    let extname = path.extname(filePath);
    
    let contentType = 'text/html';
    switch(extname){
        case '.js':
           contentType = 'text/javascript';
        break;
        case '.css':
           contentType = 'text/css';
        break;
        case '.json':
           contentType = 'text/json';
        break;
        case '.png':
           contentType = 'text/png';
        break;
        case '.jpg':
           contentType = 'text/jpg';
        break;
    }
    fs.readFile(filePath, (err,content) => {
        if(err){
            if(err.code == 'ENOENT'){
                fs.readFile(path.join(__dirname,'public','404.html'), (err,content) => {
                    res.writeHead(200,{'content-type': 'text/html'});
                    res.end(content, 'utf8');
                });
            }else{
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else{
            res.writeHead(200,{'content-type':contentType});
            res.end(content);
        }
    });

});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running at ${PORT}`));