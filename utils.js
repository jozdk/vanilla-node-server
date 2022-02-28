const fs = require("fs"),
    contentTypes = require("./contentTypes.js");

module.exports = {
    sendFile: (file, res) => {
        try {
            const data = fs.readFileSync(file);
            res.end(data);
        } catch (err) {
            res.writeHead(500, contentTypes[".html"]);
            res.end("<h1>There was an error on the server. Try again or contact site administrators.</h1>");
        }

        // // Asynchronous
        
        // fs.readFileSync(file, (error, data) => {
        //     if (error) {
        //         res.writeHead(500, contentTypes.html);
        //         res.end("<h1>There was an error on the server. Try again or contact site administrators.</h1>");
        //     }
        //     res.end(data);
        // });
    }
}