const category = require('./queries/category')
const categoryGroup = require('./queries/categoryGroup')
const categoryGroupOptions = require('./queries/categoryGroupOption')
const categoryOption = require('./queries/categoryOption')
const recipe = require('./queries/recipe')
const ingredient = require('./queries/recipeIngredient')
const instruction = require('./queries/recipeInstruction')
const recipeTag = require('./queries/recipeTag')
const recipeTime = require('./queries/recipeTime')
const tag = require('./queries/tag')

module.exports = {
    getCategories: category.getCategories,
    getCategoryById: category.getCategoryById,

    getCategoryGroups: categoryGroup.getCategoryGroups,
    getCategoryGroupById: categoryGroup.getCategoryGroupById,

    getCategoryGroupOptions: categoryGroupOptions.getCategoryGroupOptions,
    getCategoryGroupOptionById: categoryGroupOptions.getCategoryGroupOptionById,
    getCategoryGroupOptionByGroupId: categoryGroupOptions.getCategoryGroupOptionByGroupId,
    getCategoryGroupOptionByOptionId: categoryGroupOptions.getCategoryGroupOptionByOptionId,

    getCategoryOptions: categoryOption.getCategoryOptions,
    getCategoryOptionById: categoryOption.getCategoryOptionById,

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