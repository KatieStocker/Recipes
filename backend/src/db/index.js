const category = require('./queries/category')
const recipe = require('./queries/recipe')
const ingredient = require('./queries/recipeIngredient')
const instruction = require('./queries/recipeInstruction')
const recipeTag = require('./queries/recipeTag')
const recipeTime = require('./queries/recipeTime')
const tag = require('./queries/tag')

module.exports = {
    getCategories: category.getCategories,
    getCategoryById: category.getCategoryById,

    getRecipes: recipe.getRecipes,
    getRecipeById: recipe.getRecipeById,
    getRecipePageRecipes: recipe.getRecipePageRecipes,

    getIngredient: ingredient.getIngredients,
    getIngredientById: ingredient.getIngredientById,
    getIngredientByRecipeId: ingredient.getIngredientByRecipeId,

    getInstruction: instruction.getInstructions,
    getInstructionById: instruction.getInstructionById,
    getInstructionByRecipeId: instruction.getInstructionByRecipeId,

    getRecipeTags: recipeTag.getRecipeTags,
    getRecipeTagsByRecipeId: recipeTag.getRecipeTagsByRecipeId,
    getRecipeTagsByTagId: recipeTag.getRecipeTagsByTagId,

    getRecipeTimes: recipeTime.getRecipeTimes,
    getRecipeTimesByRecipeId: recipeTime.getRecipeTimesByRecipeId,

    getTags: tag.getTags,
    getTagById: tag.getTagById,
}