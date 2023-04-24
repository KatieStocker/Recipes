const recipe = require('./queries/recipe')

module.exports = {
    getRecipes: recipe.getRecipes,
    getRecipeById: recipe.getRecipeById,
}