var express = require("express");
const req = require("express/lib/request");

var router = express.Router();

router.get("/", (req,res)=>{ 
    console.log("Página inicial.")
    res.render("index")
    
})

module.exports = router;