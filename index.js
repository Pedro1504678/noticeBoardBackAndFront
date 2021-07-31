const port = 3000;
const express = require('express');
const app = express();
const posts = require('./model/posts');


app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

app.post("/new", express.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title, description);
    res.send("Post added");
});

app.delete("/delete", express.json(), (req, res) => {
    let id = req.body.id;
    posts.deletePost(id);
    res.send("ID " + id + " deletado!");
})


app.listen(port, () => {
    console.log("Server running on port", port);
});


