const contentTypes = require("./contentTypes.js"),
    utils = require("./utils.js");
    // fs = require("fs"),
    // path = require("path");

const routes = {
    "GET": {},
    "POST": {}
};

exports.handle = (req, res) => {
    try {
        routes[req.method][req.url](req, res);
    } catch (err) {
        if (err.message === "routes[req.method][req.url] is not a function") {
            console.log(`The requested route is not registered: ${req.url}`);
        } else {
            console.log(err);
        }
        res.writeHead(404, contentTypes[".html"]);
        utils.sendFile("public/error.html", res);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};

exports.routes = routes;