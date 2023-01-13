const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors(
    {
        origin : "http://localhost:3000",
        methods : "*",
        credentials : true
    }
));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
});


app.post("/posts",async (req, res) => {
    
    const id = randomBytes(4).toString("hex");
    const   {title} = req.body;
    console.log(title);
    console.log(req.body);
    console.log(req.url);
    posts[id] = {
        id, title
    }
    await axios.post("http://localhost:4005/events",  {
        type: "PostCreated",
        data: {
            id, title
        }
    });
    
    res.send(posts[id]);
    console.log(posts);
});


app.post("/events", (req, res) => {
    const event = req.body;
    console.log("event", event);
});

app.listen(4000, () => {
    console.log("posts server started at port 4000")
});