// imports
const express = require('express');
const categoryCtrl = require('../controllers/category.controller');

// constants
const router = express.Router();
const {
    verifyAccessToken
} = require('../helpers/jwt.helper');

// route: category/
router.post('/', verifyAccessToken, categoryCtrl.createCategory);
router.put('/editCategory', verifyAccessToken, categoryCtrl.editCategory);
router.delete('/:categoryId', verifyAccessToken, categoryCtrl.deleteCategory);
router.get('/', categoryCtrl.getCategories);
router.get('/categorizedBlogs/:authorId?', categoryCtrl.getCategorizedBlogCount);

// exports
module.exports = router;