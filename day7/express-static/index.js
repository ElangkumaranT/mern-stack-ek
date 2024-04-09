const express = require('express');
const path = require('path');
const app=express();

console.log(__dirname);

console.log(__filename);

console.log(path.join(__dirname,'public'));

app.use(express.static(path.join(__dirname,'public')));//default load  to join path
app.use(express.static(path.join(__dirname,'imag')));
app.use(express.static(path.join(__dirname,'assest')));
app.get('/',(req,res)=>
{
res.sendFile(path.join(__dirname,'public','homepage.html'));

});
app.listen(3001,()=>
{
console.log("server is running at http://localhost:3001");
});