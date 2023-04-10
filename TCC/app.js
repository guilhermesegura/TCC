var express = require("express")
var path = require("path")
require('express-async-errors')

const connectDB = require('./db/connect')
require('dotenv').config()

var routes = require("./routes/classes")
var app = express()

app.use(express.json())
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


app.get("/", (req, res)=>{
    res.render("index")
})


app.use("/api/v1/classes", routes)

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