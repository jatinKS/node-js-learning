const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname,'test'),{},err=>{
//     if(err) throw err;
//     console.log('Folder created...');
// });

// fs.writeFile(
//     path.join(__dirname,'test','note.txt'),'Hello Mr. File.',err=>{
//     if(err) throw err;
//     console.log('File is written');
// }); 
// fs.appendFile(
//     path.join(__dirname,'test','note.txt'),'Hello again',err=>{
//     if(err) throw err;
//     console.log('File is written');
// });

// fs.readFile(
//     path.join(__dirname,'test','note.txt'),
//     'utf8',
//     (err,data) => {
//         if(err) throw err;
//         console.log(data);
//     }
// );

fs.rename(
    path.join(__dirname,'test','hello.txt'),
    path.join(__dirname,'test','file.txt'),
    err => {
        if(err) throw err;
        console.log('File renamed');
    }
);






















