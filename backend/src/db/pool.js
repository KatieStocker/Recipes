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

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}