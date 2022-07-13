const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const posts = {}

app.get("/posts", (req, res) => {
    res.send(posts);
});


app.post("/posts", (req, res) => {
    
        const id = randomBytes(4).toString("hex");
    const   {title} = req.body;
    console.log(title);
    console.log(req.body);
    console.log(req.url);
    posts[id] = {
        id, title
    }
    console.log("here");
    
    res.send(posts[id]);
    console.log(posts);
});

app.listen(4000, () => {
    console.log("posts server started at port 4000")
});