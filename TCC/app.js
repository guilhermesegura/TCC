var express = require("express")
var path = require("path")
require('express-async-errors')

const connectDB = require('./db/connect')
require('dotenv').config()

var TeachersRoutes = require("./routes/teachers")
var ClassRoutes = require("./routes/classes")
var StudentRoutes = require("./routes/students") 
var app = express()

app.use(express.json())

app.use("/api/v1/teachers", TeachersRoutes)
app.use("/api/v1/classes", ClassRoutes)
app.use("/api/v1/students", StudentRoutes)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening port ${port}`))
    } catch(error){
        console.log(error)
    }
}

start()