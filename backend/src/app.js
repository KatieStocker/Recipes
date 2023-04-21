require('dotenv').config()
const envVars = process.env;

const express = require('express');
const app = express()

app.get("/", function (req, res) {
    res.send("Server is running");
});

app.listen(envVars.PORT);