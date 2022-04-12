const http = require("http"),
    path = require("path"),
    App = require("./app.js"),
    contentTypes = require("./contentTypes.js"),
    utils = require("./utils.js"),
    router = require("./router.js"),
    static = require("./static.js")

const app = new App();
app.use(static(path.join(__dirname, "public")));
app.use(router.handle);

// router.get("/", (req, res) => {
//     res.writeHead(200, contentTypes[".html"]);
//     utils.sendFile("public/index.html", res);
// });

router.get("/some/path", (req, res) => {
    res.writeHead(200, contentTypes[".html"]);
    res.end("<h1>Hello from /some/path</h1>");
});

http.createServer(app.handle.bind(app)).listen(3000);

console.log("The server is now listening on port 3000");