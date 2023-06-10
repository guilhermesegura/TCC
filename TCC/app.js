var express = require("express")
var path = require("path")
require('express-async-errors')


const connectDB = require('./db/connect')
require('dotenv').config()

var TeachersRoutes = require("./routes/teachers")
var ClassRoutes = require("./routes/classes")
var StudentRoutes = require("./routes/students") 
var UserRoutes = require("./routes/user") 

var ClassModel = require("./models/classes")
var UserModel = require("./models/User")

var app = express()

app.use(express.json())

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use("/api/v1/teachers", TeachersRoutes)
app.use("/api/v1/classes", ClassRoutes)
app.use("/api/v1/students", StudentRoutes)
app.use("/api/v1/users", UserRoutes)



app.get("/materias", (req, res)=>{
    const subject = ClassModel.schema.path('materia').options.enum.values
    res.status(200).json({subject})
})

app.get("/roles", (req, res)=>{
    const roles = UserModel.schema.path('permissao').options.enum.values
    res.status(200).json({roles})
})

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