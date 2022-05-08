const express = require("express");
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler")
require("dotenv").config() //This is to initiate dotenv

app.use(express.json())  //Middleware to read the body

app.use("/api/v1/tasks",tasks)

app.use(notFound)
app.use(errorHandler)

//Server setup
const port = process.env.PORT;
const hostname = "localhost"
//We are first connecting to DB then starting server using promisses and async await
const URI = process.env.MONGO_URI;
const startServer = async ()=> {
    try{
       await connectDB(URI)
       app.listen(port, hostname, ()=> {
        console.log(`Server is listening at https://${hostname}:${port}`)
        })
    } catch (err) {
         console.log(err)
    }
} 

startServer()
