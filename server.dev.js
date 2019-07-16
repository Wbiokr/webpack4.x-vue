const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
const port=9527;


http.createServer((req,res)=>{
    let pathname=url.parse(req.url).pathname;
    if(pathname.indexOf('.')==-1||pathname.indexOf('.shtml')>10){
        pathname='/index.html';
    }
    let fileURL='./'+path.normalize(pathname);
    let extname=path.extname(pathname);
    fs.readFile(fileURL,(Error,data)=>{
        if(Error){
            res.writeHead(404,{'Content-type':'text/html;charset=UTF8'});
            res.end('404,资源没有找到！')
        }
        getMime(extname,(mime)=>{
            res.writeHead(200,{'Content-type':mime});
            res.end(data);
        })
    })
    
}).listen(port);



console.log(`we are listening:${port}`)


function getMime(extname,callback){
    fs.readFile('./webpack/mime.json',(err,data)=>{
        if(err){
            throw Error('sorry')
        };
        let mimeJson=JSON.parse(data);
        let mimeType=mimeJson[extname]||'text/plain';
        callback(mimeType)
    })
}
