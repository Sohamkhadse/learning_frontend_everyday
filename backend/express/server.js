import express from "express"

const app = express()

let port = 4000

// app.get("/", (req, res) => {
//     res.sendFile("/index.html");
// });

// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`)
// })

// app.get("/users", (req, res) => {
//     res.status(200).json([
//         {
//             name: "Soham",
//             age: 21
//         },
//         {
//             name: "Rahul",
//             age: 22
//         }
//     ]);
// });

const express = require("express");

app.get("/api", (req, res) => {
    res.status(200).json({
        message: "Data sent successfully",
        status: "success"
    });
});
    
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});