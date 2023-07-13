const express=require("express")
const { body, validationResult } = require('express-validator');
const { json } = require("body-parser");
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
const JWT_SECRET="agro_corp_1234"
const fetchuser=require("../middleware/fetchuser")
const mysql = require("mysql");

const router=express.Router();

async function connectToDatabase() {
    try {
        const con = mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "password",
            database : "c_d"
        });
      console.log('Connected to the database successfully!');
    } catch (error) {
      console.error('Failed to connect to the database:', error);
    }
  }
  
connectToDatabase();
// User.createIndexes();

// route-1
router.post("/createuser",
body('username').exists(),
body('password').isLength({min:8}),
body('email').isEmail(),

async(req,res)=>{
    let success1=false;
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    // Query for finding the user if it already exist
    if(temp){
        return res.status(400).json({error:"user already exists"})
    }

    else{
        let pass=req.body.password
        const secpass=await bcrypt.hash(pass,10)

        // Query for inserting new user

        // fetch the id of user as data 

        const authtoken=jwt.sign(data,JWT_SECRET)
        success1=true;
        res.send({success1,authtoken})
    }
})

// ROUTE -2
router.post("/login",

body('email').isEmail(),
body('password').exists(),

async (req,res)=>{
    let success=false;

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    else{
        const {email,password}=req.body;

        try {
            // query to find the user using email
            if(!user){
                res.status(400).json({error:"Incorrect credentials entered!"})
            }
            else{
            const passwordcompare= await bcrypt.compare(password,user.password)

            if(!passwordcompare){
                res.status(400).json({error:"Incorrect credentials entered!"})
            }
            else{
                
            const payload={
                user:{
                    id:user.id
                }
            }   

            const authtoken=jwt.sign(payload,JWT_SECRET);
            success=true;
            res.json({success,authtoken})
        }
    }
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error occurred")
        }
    }

})

//Route -3 
router.get("/getuser",fetchuser,async (req,res)=>{

    try {
        const userid=req.user.id;
        // query for finding the user using its id
        res.json(user); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal server error occured")
    }
    })


// Route 4
router.post('/getdisease',(req,res)=>{
    body('name').exists()
    body('image').exists()
    try{

    }
    catch{}
})

module.exports=router