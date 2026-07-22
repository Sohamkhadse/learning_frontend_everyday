import express from "express"
import dotenv from "dotenv"

import {router} from "./routers/router.js"


dotenv.config()

const app = express();

let port = process.env.PORT
// let port = process.env.PORT

app.use(router)

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})

