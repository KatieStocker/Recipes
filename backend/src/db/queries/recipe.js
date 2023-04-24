const db = require('../pool.js')
const query = require('./sqlQueries.js');

const recipeString = `${query.selectAllFrom} recipe`;
const whereParam = `${query.where} recipe.id = $1`
const getJoinString = (stringValue) => {
    return `${query.innerJoin} ${stringValue} ${query.on} recipe.id = ${stringValue}.recipe_id`;
}

const getRecipes = (req, res) => {
    db.query(`${recipeString}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getRecipeById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${recipeString} ${whereParam}`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const selectStringWithAliases = `${query.select} recipe.id ${query.as} RecipeID, recipe_ingredient.id ${query.as} RecipeIngredientID, recipe_instruction.id ${query.as} RecipeInstructionID, * ${query.from} recipe`

const getRecipePageRecipes = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${selectStringWithAliases} ${getJoinString('recipe_ingredient')} ${getJoinString('recipe_instruction')} ${whereParam}`, [id], (err, results) => {
        if (err) {
            throw err
        }
        console.log(results.rows)
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getRecipes,
    getRecipeById,
    getRecipePageRecipes,
}