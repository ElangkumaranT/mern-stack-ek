const express = require('express'); 
 const app=express();

 app.set('view engine','ejs');
 app.get("/",function(req,res)
 {
res.render("welcome",{name:'elango',rollno:'ES21CD09',dept:'BECSD'});
 });
 app.listen(5000,function(req,res)
 {
    console.log("server connected to port 5000");
 });