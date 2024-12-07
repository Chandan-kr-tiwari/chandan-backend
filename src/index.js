// another syntax for dotenv
// require ('dotenv').config({path:'./env'})
 



// import connectDb from "./db"
// import mongoose from ('mongoose')

// import {DB_NAME} from "./constants"
import dotenv from "dotenv"
import connectDb from "./db/index.js"
// import { config } from "dotenv"

dotenv.config({
    path:'./env'
})








connectDb()






// import express from ('express')

// const app = express()
// // since it is time taking because always
// // keep in mind that while connecting to database
// // we will face some errors and database will always
// // in another continent so use try catch or async await 

// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//        app.on("error",(error)=>{
//         console.log("ERROR! ",error)
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on ${process.env.PORT}`)
//        })
//     }
//     catch(error){
//            console.log("ERROR! ",console.error);
//            throw error
//     }
// }) ()