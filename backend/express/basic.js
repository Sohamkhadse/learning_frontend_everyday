// #import and export
import express from "express"
const app = express()

// default import
import gretting from "./start.js"
gretting("soham")

// named import
// import {data} from "source"

app.get("/age",(req,res)=>{
    res.send("hello")
})

app.get("/name",(req,res)=>{
    res.send("hello")
})