const express = require('express');
const router = express.Router();
const db = require('../db/index');

router.get('/', db.getRecipes)
router.get('/:id', db.getRecipeById);
router.get('/page/:id', db.getRecipePageRecipes);

router.get('/ingredients/:id', db.getIngredientById);
router.get('/ingredients/recipe/:id', db.getIngredientByRecipeId);

router.get('/instructions/:id', db.getInstructionById);
router.get('/instructions/recipe/:id', db.getInstructionByRecipeId);

router.get('/tags', db.getRecipeTags);
router.get('/tags/recipe/:id', db.getRecipeTagsByRecipeId);
router.get('/tags/tag/:id', db.getRecipeTagsByTagId);

router.get('/times', db.getRecipeTimes);
router.get('/times/recipe/:id', db.getRecipeTimesByRecipeId);

module.exports = router;