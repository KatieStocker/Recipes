require('dotenv').config()

const {
    PORT,
} = process.env;

const logger = require('./logger');
const express = require('express');
const app = express()

app.get("/", function (req, res) {
    res.send("Server is running");
});

app.listen(PORT, function (err) {
    logger.info("running server from port:::::" + PORT);
});