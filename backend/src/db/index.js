const recipe = require('./queries/recipe')
const ingredient = require('./queries/recipeIngredient')
const instruction = require('./queries/recipeInstruction')
const tag = require('./queries/tag')

module.exports = {
    getRecipes: recipe.getRecipes,
    getRecipeById: recipe.getRecipeById,
    getRecipePageRecipes: recipe.getRecipePageRecipes,

    getIngredient: ingredient.getIngredients,
    getIngredientById: ingredient.getIngredientById,
    getIngredientByRecipeId: ingredient.getIngredientByRecipeId,

    getInstruction: instruction.getInstructions,
    getInstructionById: instruction.getInstructionById,
    getInstructionByRecipeId: instruction.getInstructionByRecipeId,

    getTags: tag.getTags,
}