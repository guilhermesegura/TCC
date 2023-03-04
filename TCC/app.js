var express = require("express"); //O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
var path = require("path"); // O módulo path disponibiliza diversas funcionalidades úteis para acessar e interagir com o file system.
app.set("view engine", "ejs");
var routes = require("./routes/routes")
var app = express();

app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res)=>{
    res.render("index")
})




const port = 3000
app.listen(port)