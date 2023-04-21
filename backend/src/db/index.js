require('dotenv').config({ path: __dirname + '../../.env.local' });
const {
    DB_USER,
    DB_HOST,
    DB,
    DB_PASS,
    DB_PORT,
} = process.env

const Pool = require('pg').Pool;
const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB,
    password: DB_PASS,
    port: DB_PORT,
});

const getRecipes = (req, res) => {
    pool.query('SELECT * FROM recipe', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

module.exports = {
    getRecipes
}