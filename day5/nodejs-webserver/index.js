import http from "http";
import url from "url";

const server =http.createServer((req,res)=>{
 const parseurl =url.parse(req.url,true);


 if(parseurl.pathname === "/"&&req.method ==="GET")
 {
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("<h1>web server creation successfull!</h1>")
 }
else if(parseurl.pathname === "/about" &&req.method==="GET")
{
    res.writeHead(200, {"Content-type":"text/html"});
    res.end("<h1>ABOUT US</h1>");
}
else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>File NOT FOUND </h1>");
}
});
server.listen(5001,()=>{
    console.log("server running succssfully in http://localhost5000");
});