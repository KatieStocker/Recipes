const express = require('express');
const router = express.Router();
const db = require('../db/index');

router.get('/', db.getRecipes)
router.get('/:id', db.getRecipeById);
router.get('/page/:id', db.getRecipePageRecipes);


module.exports = router;