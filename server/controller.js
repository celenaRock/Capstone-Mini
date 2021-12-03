const path = require("path");
const comments = require('./db.json');

module.exports = {
    home: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
    },

    artist: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../public/artist.html"));
    },
    project: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../public/project.html"));
    },


    getComments: (req, res) => {
        res.status(200).send(comments)
    },

    createComment: (req, res) => {
        let { name, text, pony} = req.body;
        let newComment = {
            name: name,
            text: text,
            pony: pony
        }
        comments.push(newComment)
        res.status(200).send(newComment)
    }
    
}