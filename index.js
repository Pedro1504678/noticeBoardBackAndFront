const port = 3000;
const express = require('express');
const app = express();

let posts = [
    {
        id: "ksdjvbksdbvk",
        title: "Mural test",
        descripttion: "Test description"
    },
]

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
});

app.post("/new", express.json(),  (req, res) => { 
    let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({id, title, description});
    
    res.send("Post added");
});


app.listen(port, () => {
    console.log("Server running on port", port);
});

function generateID(){
    return Math.random().toString(36).substr(2, 9);
}
