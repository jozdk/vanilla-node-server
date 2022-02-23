const contentTypes = require("./contentTypes.js"),
    utils = require("./utils.js");

const routes = {
    "GET": {},
    "POST": {}
};

exports.handle = (req, res) => {
    try {
        routes[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(404, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};