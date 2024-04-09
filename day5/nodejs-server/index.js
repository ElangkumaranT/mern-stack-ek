import http from "http";//no need to package download
import url from "url";//no need to package download
//ex:abc,agd,ahk
//get to get a infomation from server to get abc,agd,ahk
//post is used to 
//delect total data only delect single data,delect only for abc using id 
//put is used to update operation
const server=http.createServer((req,res)=>  //to create the local server one req i/p and res o/p
{
  res.writeHead(200,{'Content-type':'Application/json'})//200sucess number wthic type content and server creat end

  res.end(JSON.stringify(
    {
        data:"hello world",//hello world content json formet
    }
  ));
  
});

  server.listen(5000, ()=>{//5000 is port number after hit topr
    console.log("server is running in http://localhost:5000");//
  })

