const express = require('express');
const router = express.Router();
const db = require('../db/index');

router.get('/', db.getCategories)
router.get('/:id', db.getCategoryById);

module.exports = router;