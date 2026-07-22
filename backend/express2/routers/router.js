import express from "express";

const router = express.Router()

router.get("/",(req,res)=>{
res.status(200).json({messege:"welcome to the root"})
}) 

router.get("/messege",(req,res)=>{
    res.status(200).json({messege:"welcome home"})
})

router.get("/learn-more",(req,res)=>{
    res.status(200).json({messege:"lets get on with it."})
})

export {router}
