const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

posts = {};


app.get("/posts", (req, res) => {
    console.log(posts);
    res.status(200).send(posts);
});


app.post("/events", (req, res) => {
    const event = req.body;
    console.log("event", event);
    const {type , data} = req.body;
    console.log("here", type, data);
    if(type === "PostCreated"){
        const {id, title} = data;
        posts[id] = {id, title, comments:[]};
    }
    if(type === "CommentCreated"){
        const {postId, id, content} = data;
        console.log(postId);
        posts[postId].comments.push({id, content});
    }
    console.log(posts)
});

app.listen(4002, () => {
    console.log("Listening on port 4002");
});
