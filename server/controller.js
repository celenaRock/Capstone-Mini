const path = require("path");

module.exports = {
    home: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
    },

    artist: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../public/artist.html"));
    }
    
}