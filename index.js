const http = require("http"),
    contentTypes = require("./contentTypes.js"),
    utils = require("./utils.js"),
    router = require("./router.js"),
    static = require("./static.js");

static("public");

console.log(router.routes);

router.get("/", (req, res) => {
    res.writeHead(200, contentTypes[".html"]);
    utils.getFile("public/index.html", res);
});

http.createServer(router.handle).listen(3000);

console.log("The server is now listening on port 3000");