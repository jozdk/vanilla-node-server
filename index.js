const http = require("http");
const fs = require("fs");

const getViewUrl = (url) => {
    if (url === "/") {
        url = "/index.html";
    }
    return `./views${url}`;
}

const sendErrorResponse = (res) => {
    res.writeHead(404, {
        "Content-Type": "text/html"
    });

    res.write("<h1>File Not Found!</h1>");
    res.end();
}

http.createServer((req, res) => {
    
    let url = req.url;

    console.log(url);
    console.log(url.indexOf(".html"));

    if (url.indexOf(".html") !== -1) {
        console.log("Handling HTML request");
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        customReadFile(getViewUrl(url), res);
    } else if (url.indexOf(".js") !== -1) {
        res.writeHead(200, {
            "Content-Type": "text/javascript"
        });
        customReadFile(`./public/js${url}`, res);
    } else if (url.indexOf(".css") !== -1) {
        res.writeHead(200, {
            "Content-Type": "text/css"
        });
        customReadFile(`./public/css${url}`, res);
    } else if (url.indexOf(".png") !== -1) {
        res.writeHead(200, {
            "Content-Type": "image/png"
        });
        customReadFile(`./public/images${url}`, res);
    } else {
        sendErrorResponse(res);
    }

})
.listen(3000);

console.log("The server has started and is listening on port 3000");

const customReadFile = (filePath, res) => {
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, (error, data) => {
            if (error) {
                console.log(error);
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
};