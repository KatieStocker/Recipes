const db = require('../pool.js')
const query = require('./sqlQueries.js');

const recipeTagQuery = `${query.selectAllFrom} recipe_tag`

const getRecipeTags = (req, res) => {
    db.query(`${recipeTagQuery}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getRecipeTagsByRecipeId = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${recipeTagQuery} ${query.where} recipe_id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getRecipeTagsByTagId = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${recipeTagQuery} ${query.where} tag_id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

module.exports = {
    getRecipeTags,
    getRecipeTagsByRecipeId,
    getRecipeTagsByTagId,
}