const db = require('../pool.js')
const query = require('./sqlQueries.js');

const getRecipes = (req, res) => {
    db.query(`${query.selectAllFrom} recipe`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getRecipeById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${query.selectAllFrom} recipe ${query.where} id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const getRecipeForRecipePage = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${query.selectAllFrom} recipe ${query.innerJoin} recipe_ingredient ${query.on} recipe.id = recipe_ingredient.recipe_id ${query.innerJoin} recipe_instruction ${query.on} recipe.id = recipe_instruction.recipe_id ${query.where} recipe.id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getRecipes,
    getRecipeById,
    getRecipeForRecipePage
}