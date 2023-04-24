const recipe = require('./queries/recipe')
const ingredient = require('./queries/recipeIngredient')
const instruction = require('./queries/recipeInstruction')

module.exports = {
    getRecipes: recipe.getRecipes,
    getRecipeById: recipe.getRecipeById,

    getIngredient: ingredient.getIngredients,
    getIngredientById: ingredient.getIngredientById,
    getIngredientByRecipeId: ingredient.getIngredientByRecipeId,

    getInstruction: instruction.getInstructions,
    getInstructionById: instruction.getInstructionById,
    getInstructionByRecipeId: instruction.getInstructionByRecipeId,
}