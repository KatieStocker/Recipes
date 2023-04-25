require('dotenv').config({ path: __dirname + '../../.env.local' });
const logger = require('./logger'),
    express = require('express'),
    bodyParser = require('body-parser'),
    {
        PORT,
    } = process.env,
    app = express(),
    db = require('./db/index');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/recipe', db.getRecipes);
app.get('/recipe/:id', db.getRecipeById);
app.get('/recipepagerecipe/:id', db.getRecipePageRecipes);

app.get('/tags', db.getTags);

app.listen(PORT, err => {
    logger.info("App running on port:::::" + PORT);
});