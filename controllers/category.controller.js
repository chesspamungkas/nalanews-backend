// imports
const categoryService = require('../services/category.service');
const blogService = require('../services/blog.service');
const utils = require('../util');

const createCategory = async(req, res, next) => {
    try {
        
        let categoryBody = req.body;

        const savedCategory = await categoryService.createCategory(categoryBody);
        res.send(savedCategory);

    } catch (error) {
        next(error);
    }
}

const getCategories = async(req, res, next) => {
    try {

        let searchParams = {};
        const categories = await categoryService.readCategory(searchParams);
        res.send(categories);

    } catch (error) {
        next(error);
    }
}

const editCategory = async(req, res, next) => {
    try {

        let categoryBody = req.body;

        await categoryService.updateCategory(categoryBody);

        const updatedCategory = await categoryService.findUniqueCategory({_id: categoryBody.categoryId}, ['_id', 'category']);
        
        res.send(updatedCategory);

    } catch (error) {
        next(error);
    }
}

const deleteCategory = async(req, res, next) => {
    try {
        let searchParams = { _id: req.params.categoryId };

        let category = await categoryService.findUniqueCategory({_id: req.params.categoryId}, ['_id', 'category']);
        if( category.length == 0 ) {
            throw createErrors.NotFound('This category does not exists');
        }

        const deletedCategory = await blogService.deleteCategory(searchParams);

        res.status(deletedCategory);

    } catch (error) {
        next(error);
    }
}

const getCategorizedBlogCount = async(req, res, next) => {
    try {

        let searchParams = {};

        let authorId = req.params.authorId;
        if( authorId && authorId.toLowerCase() != 'all' ) {
            searchParams.author = authorId;
        }

        let categories = await categoryService.readCategory();

        let count = [];

        categories.forEach(c => {
            searchParams.category = c._id;
            count.push(
                blogService.countBlogs(searchParams)
            );
        });

        count = await Promise.all(count);

        const result = utils.combineArrayObjectAndArray(categories, ['_id', 'category'], count, 'count')

        res.send(result);

    } catch (error) {
        next(error);
    }
}

 // exports
 module.exports = {
    createCategory,
    editCategory,
    deleteCategory,
    getCategories,
    getCategorizedBlogCount
 }