const db = require('../pool.js')
const query = require('./sqlQueries.js');

const recipeTimeQuery = `${query.selectAllFrom} recipe_time`

const getRecipeTimes = (req, res) => {
    db.query(`${recipeTimeQuery}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getRecipeTimesByRecipeId = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${recipeTimeQuery} ${query.where} recipe_id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

module.exports = {
    getRecipeTimes,
    getRecipeTimesByRecipeId,
}