var http=require('http')
var fs=require('fs')

const port=8080;
fs.readFile('./index.html',function(error,html)
{
    if(error) throw error;
    http.createServer(function(request,responce)
    {
        responce.writeHeader(200,{"content-Type":"text/html"});
        responce.write(html);
        responce.end();

    }).listen(port)
   
    
})