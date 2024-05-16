const mongoose =require('mongoose')
const express = require('express')

const userSchema = new mongoose.Schema({
    note: {
        type: String,
        
        
    },
    dn: {
        type: String,
        
    }
})
const userModel=mongoose.model("notes",userSchema)
module.exports=userModel