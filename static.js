const fs = require("fs");
const path = require("path");
const { routes } = require("./router.js");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

module.exports = (folder) => {
    console.log("Static File Routes are being registered");
    const dirContent = fs.readdirSync(folder); // For the moment does not support subfolders in public!
    dirContent.forEach(file => {
        routes["GET"][`/${file}`] = (req, res) => {
            res.writeHead(200, contentTypes[path.extname(file)]);
            utils.getFile(path.join(folder, file), res);
        }
    });  
};

console.log(routes);