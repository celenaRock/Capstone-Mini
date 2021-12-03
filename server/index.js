const express = require('express');
const cors = require('cors');

const app = express();

const path = require("path");

app.use(express.json());
app.use(cors());

app.use(express.static("public"));

const PORT = 4000
const { home, artist } = require('./controller.js')



app.get("/", home);
app.get("/artist", artist)
app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "public/stylesheets"));
});

app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "public/js"));
});



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));