const fs = require("fs"),
    contentTypes = require("./contentTypes.js");

module.exports = {
    sendFile: (file, res) => {
        fs.readFile(file, (error, data) => {
            if (error) {
                res.writeHead(500, contentTypes.html);
                res.end("<h1>There was an error on the server. Try again or contact site administrators.</h1>");
            }
            res.end(data);
        });
    }
}