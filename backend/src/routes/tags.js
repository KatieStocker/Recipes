const express = require('express');
const router = express.Router();
const db = require('../db/index');

router.get('/', db.getTags);
router.get('/:id', db.getTagById);

module.exports = router;