import express from 'express'

import cors from 'cors'

import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

// middleware for accepting data as json and also limited
app.use(express.json({limit:"16kb"}))

// configuartion for accepting data as url 
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// used for storing some images , files on server etc in public folder
app.use(express.static("public"))

// used for server can access the user's browser cookies and perform crud operation
app.use(cookieParser())

export { app }
