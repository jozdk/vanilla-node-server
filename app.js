module.exports = class App {
    constructor() {
        this.functions = [];
    }

    handle(req, res) {
        if (req.url === "/") {
            req.url = "/index.html";
        }
        this.functions.forEach((func) => {
            if (res.writableEnded) return;
            func(req, res);
        });
    }

    use(func) {
        this.functions.push(func);
    }
}