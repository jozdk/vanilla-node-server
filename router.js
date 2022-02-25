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
    } catch (e) {
        console.log(e.message);
        res.writeHead(404, contentTypes[".html"]);
        utils.getFile("public/error.html", res);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};

exports.routes = routes;