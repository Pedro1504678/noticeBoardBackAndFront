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

//Routes
app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
})

app.post("/new", (req, res) => { })


app.listen(port, () => {
    console.log("Server running on port", port);
})