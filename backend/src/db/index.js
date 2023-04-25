const recipe = require('./queries/recipe')
const ingredient = require('./queries/recipeIngredient')
const instruction = require('./queries/recipeInstruction')
const recipeTime = require('./queries/recipeTime')
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

    getRecipeTimes: recipeTime.getRecipeTimes,
    getRecipeTimesByRecipeId: recipeTime.getRecipeTimesByRecipeId,

    getTags: tag.getTags,
}