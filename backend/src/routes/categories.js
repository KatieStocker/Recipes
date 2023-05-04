const express = require('express');
const router = express.Router();
const db = require('../db/index');

router.get('/', db.getCategories)
router.get('/:id', db.getCategoryById);
router.get('/groups', db.getCategoryGroups);
router.get('/groups/:id', db.getCategoryGroupById);
router.get('/options', db.getCategoryOptions);
router.get('/options/:id', db.getCategoryOptionById);
router.get('/group_options/', db.getCategoryGroupOptions);
router.get('/group_options/:id', db.getCategoryGroupOptionById);
router.get('/group_options/group/:id', db.getCategoryGroupOptionByGroupId);
router.get('/group_options/option/:id', db.getCategoryGroupOptionByOptionId);

module.exports = router;