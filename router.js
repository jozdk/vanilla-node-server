const contentTypes = require("./contentTypes.js"),
    utils = require("./utils.js"),
    fs = require("fs"),
    path = require("path");

const routes = {
    "GET": {},
    "POST": {}
};


exports.handle = (req, res) => {
    console.log(req.url);
    let url = req.url === "/" ? "/index.html" : req.url;
    console.log(url);
    let extname = String(path.extname(url)).toLowerCase();

    fs.readFile(`public${url}`, (err, data) => {
        if (err) {
            console.log(err.code)
            if (err.code === "ENOENT") {
                console.log("File not found")
                fs.readFile("public/error.html", (err, data) => {
                    if (err) {
                        console.log(err.code);
                        return;
                    }
                    res.writeHead(404, contentTypes[".html"]);
                    res.end(data);
                });
            } else {
                res.writeHead(500);
                res.end("There was an error on the server. Try again or contact site administrators.");
            }
        } else {
            res.writeHead(200, contentTypes[extname]);
            res.end(data);
        }
    });

    // try {
    //     routes[req.method][req.url](req, res);
    // } catch (e) {
    //     res.writeHead(404, contentTypes.html);
    //     utils.getFile("views/error.html", res);
    // }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};