const http = require("http"),
    contentTypes = require("./contentTypes.js"),
    utils = require("./utils.js"),
    router = require("./router.js"),
    static = require("./static.js");

static("public");

console.log("The router has these routes: ", router.routes);

router.get("/", (req, res) => {
    res.writeHead(200, contentTypes[".html"]);
    utils.sendFile("public/index.html", res);
});

http.createServer(router.handle).listen(3000);

console.log("The server is now listening on port 3000");