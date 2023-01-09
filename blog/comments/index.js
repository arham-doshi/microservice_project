const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const app = express();
app.use(cors({
    origin : "http://localhost:3000",
    methods : "*",
    credentials : true
}));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());



const getCommentsByPostId = {};

app.get("/posts/:id/comments",(req, res) => {
    res.send((getCommentsByPostId[req.params.id] || []));
});

app.post("/posts/:id/comments", (req, res) => {
    const comments = getCommentsByPostId[req.params.id] || [];
    const content = req.body.content;
    const newId = randomBytes(4).toString("hex");
    comments.push({"id" : newId, content});
    getCommentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log("listening to port 4001");
})