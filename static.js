const fs = require("fs");
const path = require("path");
const { routes } = require("./router.js");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

module.exports = (folder) => {
    return (req, res) => {
        try {
            const filePath = req.url;
            const data = fs.readFileSync(path.join(folder, filePath));
            res.writeHead(200, contentTypes[path.extname(filePath)]);
            res.end(data);
        } catch(err) {
            if (err.code === "ENOENT") {
                console.log(`The requested ressource is not in public folder: ${path.basename(err.path)}`);
            } else {
                console.log(err);
            }
        }
    };
}

// module.exports = (folder) => {
//     console.log("Static file routes are being registered...");
//     const dirContent = fs.readdirSync(folder);
//     console.log(dirContent);
//     dirContent.forEach(file => {
//         routes["GET"][`/${file}`] = (req, res) => {
//             res.writeHead(200, contentTypes[path.extname(file)]);
//             utils.sendFile(path.join(folder, file), res);
//         }
//     });  
// };

// const publicContent = [];

// module.exports = (folder) => {
//     fs.readdirSync(folder).forEach((fileOrSubdir) => {
//         publicContent.push(fileOrSubdir);
//     });
//     console.log("static files: ", publicContent);

//     return (req, res) => {
//         try {
//             publicContent.forEach((file) => {
//                 if ("/" + file === req.url) {
//                     res.writeHead(200, contentTypes[path.extname(file)]);
//                     utils.sendFile(path.join(folder, req.url), res);
//                 }
//             });
//         } catch(err) {
//             console.log(err);
//         }
//     }

    
// }
