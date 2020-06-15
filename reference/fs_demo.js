const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname,'test'),{},err=>{
    if(err) throw err;
    console.log('Folder created...');
});

fs.writeFile(
    path.join(__dirname,'test','hello.txt'),'Hello Mr. File',err=>{
    if(err) throw err;
    console.log('File is written');
});