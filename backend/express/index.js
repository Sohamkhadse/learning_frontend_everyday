import express from "express"

const app = express()

let port = 4000

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log("server is running")
})
