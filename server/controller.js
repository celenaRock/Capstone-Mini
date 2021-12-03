const path = require("path");
const comments = require('./db.json');

module.exports = {
    home: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
    },

    artist: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../public/artist.html"));
    },
    getComments: (req, res) => {
        res.status(200).send(comments)
    }
    
}