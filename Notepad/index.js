const express= require('express');
const mongoose=require('mongoose');

const cors=require('cors');
const app=express();
const userModel=require('./models/Db')
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://karthi:karthi03@cluster0.s6kuepn.mongodb.net/content")

app.get("/view",(req,res)=>{
    userModel.find()
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err))
})
app.post("/save",async (req,res)=>{
    const user=req.body;
    const newUser=new userModel(user);
    await newUser.save();
    res.json(user);
})

app.listen(3001,()=>
{
    console.log("surver is running in port 3000");
})