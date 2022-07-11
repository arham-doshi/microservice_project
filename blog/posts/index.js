const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/posts", (req, res) => {
    res.send("welcome to post");
});


app.post("/posts", (req, res) => {
    // var post = {
    //     id : randomBytes(4).toString("hex"),
    //     title : req.body
    // } ;
    
    res.send("in the posts");
});

app.listen(4000, () => {
    console.log("posts server started at port 4004")
});