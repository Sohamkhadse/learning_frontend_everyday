import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

let port = process.env.PORT

const app=express();

let corsOptions = {
    method: "*",
    origin:"*"
}

app.use(cors(corsOptions));

app.get("/data",(req,res)=>{
    res.status(200).json({message:"Hello from server!"});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
