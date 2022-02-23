const http = require("http"),
    //fs = require("fs"),
    contentTypes = require("./contentTypes.js"),
    utils = require("./utils.js"),
    router = require("./router.js");

router.get("/", (req, res) => {
    res.writeHead(200, contentTypes.html);
    utils.getFile("views/index.html", res);
});

router.get("/contact.html", (req, res) => {
    res.writeHead(200, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

router.get("/about.html", (req, res) => {
    res.writeHead(200, contentTypes.html);
    utils.getFile("views/about.html", res);
})

router.get("/style.css", (req, res) => {
    res.writeHead(200, contentTypes.css);
    utils.getFile("public/css/style.css", res);
})

http.createServer(router.handle).listen(3000);

console.log("The server is listening on port 3000");