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

const recipeQueries = require('./queries/recipe');

const getRecipes = (req, res) => {
    recipeQueries.getRecipes(req, res, pool)
};
const getRecipeById = (req, res) => {
    recipeQueries.getRecipeById(req, res, pool)
};

module.exports = {
    getRecipes,
    getRecipeById
}