var express = require("express"); //O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
var path = require("path"); // O módulo path disponibiliza diversas funcionalidades úteis para acessar e interagir com o file system.


var routes = require("./routes")
var app = express();



app.set("port", process.env.PORT || 3000); // esse aqui é o servidor web que está o projeto.

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(routes);

app.listen(app.get("port"), ()=>{
    console.log("servidor iniciado no port:" + app.get("port"));
});