require('dotenv').config()
const logger = require('./logger'),
    express = require('express'),
    {
        PORT,
    } = process.env,
    app = express();

app.get("/", function (req, res) {
    res.send("Server is running");
});

app.listen(PORT, function (err) {
    logger.info("running server from port:::::" + PORT);
});