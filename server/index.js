const express = require('express')
const app = express()
const Port = 3000

const body_parser=require("body-parser");
// const mongoose=require("mongoose");
const cors=require('cors');

app.use(cors())
app.use(express.json())

app.use(body_parser.urlencoded({extended:true}));

app.use("/api/auth",require("./routes/auth"))

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(Port,(req,res)=>{
    console.log(`Listening on Port ${Port}`)
})