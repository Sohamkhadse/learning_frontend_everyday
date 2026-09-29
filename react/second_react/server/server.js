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


app.get("/user", (req, res) => {
    res.status(201).json({
        name: "Soham",
        age: 21
    });
});

app.get("/student", (req, res) => {
    res.status(202).json({
        name: "Rahul",
        roll: 10,
        branch: "CSE"
    });
});

app.get("/product", (req, res) => {
    res.status(203).json({
        product: "Laptop",
        price: 50000
    });
});

app.get("/message", (req, res) => {
    res.status(205).json({
        message: "Response received"
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
