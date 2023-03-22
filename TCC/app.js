var express = require("express"); 
var path = require("path"); 

var routes = require("./routes/classes")
var app = express();

app.use(express.json())
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res)=>{
    res.render("index")
})


app.use("/api/v1/classes", routes)

const port = 3000
app.listen(port, ()=>{
    console.log(`Listen on port  ${port}`)
})