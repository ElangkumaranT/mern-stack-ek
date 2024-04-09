import express from "express";

const app=express();

app.get("/",(req,res)=>
{
    res.send("<h1>welcome to express home page</h1>");

});
app.get("/about",(req,res)=>
{
    res.send("<h1>ABOUT us</h1>");
    
});
app.use((req,res) =>{
res.status(404),send("<h1>page not found</h1>");
});
app.listen(3001,()=>
{
    console.log(" express server is running http://localhost:3001");
})