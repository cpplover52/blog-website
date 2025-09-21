const express = require("express")
const app = express()
const port = 4000
app.listen(4000);
app.set("view engine", "ejs")
app.get("/", (req,res) =>{
    res.render("home")
})