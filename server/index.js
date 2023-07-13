const express = require('express')
const app = express()
const Port = 3000

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(Port,(req,res)=>{
    console.log(`Listening on Port ${Port}`)
})