import express from "express"
import path from "path"
import "express-async-errors"


import connectDB from "./db/connect.js"
import dotenv from "dotenv"
dotenv.config()


import ClassRoutes from "./routes/classes.js"

 
import userRoutes from "./routes/users.js";

import authRoutes from "./routes/auth.js";

import refreshTokenRoutes from "./routes/refreshToken.js";

import ClassModel from "./models/classes.js"
import UserModel from "./models/User.js"



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


app.use("/api/v1/classes", ClassRoutes)



app.use("/api", authRoutes);
app.use("/api/refreshToken", refreshTokenRoutes);
app.use("/api/users", userRoutes);


app.get("/materias", (req, res)=>{
    const subject = ClassModel.schema.path('materia').options.enum.values
    res.status(200).json({subject})
})

app.get("/roles", (req, res)=>{
    const roles = UserModel.schema.path('roles').options.enum
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