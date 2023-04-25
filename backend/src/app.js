require('dotenv').config({ path: __dirname + '../../.env.local' });
const logger = require('./logger'),
    express = require('express'),
    bodyParser = require('body-parser'),
    {
        PORT,
    } = process.env,
    app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.use('/recipes', require('./routes/recipes'))
app.use('/tags', require('./routes/tags'));

app.listen(PORT, err => {
    logger.info("App running on port:::::" + PORT);
});