const db = require('../pool.js')
const query = require('./sqlQueries.js');

const getIngredients = (req, res) => {
    db.query(`${query.selectAllFrom} recipe_ingredient`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getIngredientById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${query.selectAllFrom} recipe_ingredient ${query.where} id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const getIngredientByRecipeId = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${query.selectAllFrom} recipe_ingredient ${query.where} recipe_id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getIngredients,
    getIngredientById,
    getIngredientByRecipeId,
}