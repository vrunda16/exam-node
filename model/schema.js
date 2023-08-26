const { default: mongoose } = require("mongoose");
const express=require("mongoose");
let passportSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,

})

const passportjs=mongoose.model("passportjs",passportSchema)
module.exports=passportjs
