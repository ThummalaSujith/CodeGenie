import dotenv from "dotenv"
dotenv.config();
import {app} from "./src/app.js"






app.listen(3001,()=>{
    console.log(`server running on port 3001`)
})