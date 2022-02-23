const fs = require("fs"),
    contentTypes = require("./contentTypes.js");

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(500, contentTypes.html);
                res.end("There was an error on the server. Try again or contact site administrators.");
            }
            res.end(data);
        });
    }
}