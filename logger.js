const logger = (req, res) => {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`)
}

module.exports = logger;