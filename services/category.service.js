// imports
const createErrors = require('http-errors');
const { Category } = require('../models/category.model');
const utils = require('../util');

// CRUD
const createCategory = async(categoryBody) => {
    try {

        const newCategory = new Category(categoryBody);
        const savedCategory = await newCategory.save();

        return Promise.resolve(savedCategory);

    } catch (error) {

        if( error.code && error.code == 11000 ) {
            error = createErrors.Forbidden(`${categoryBody.category} already exists`);
            return Promise.reject(error);
        }

        return Promise.reject(error);

    }
}

const readCategory = async() => {
    try {

        const categories = await Category
        .find()
        .select('category');

        return Promise.resolve(categories);

    } catch (error) {
        return Promise.reject(error);
    }
}

const findUniqueCategory = async(searchParams, selectFields = '') => {
    try {

        const categoryResult = await Category
        .findOne(searchParams)
        .select(selectFields);
        if( !categoryResult ) {
            throw createErrors.NotFound('Incorrect information');
        }

        return Promise.resolve(categoryResult);

    } catch (error) {

        if( error.name == 'CastError' ) {
            error = createErrors.BadRequest('Invalid categoryId')
        }

        return Promise.reject(error);

    }
}

const updateCategory = async(categoryBody) => {
    try {

        const categoryId = categoryBody.categoryId;
        const updateBody = utils.makeObjectExcept(categoryBody, ['categoryId']);
        const updatedCategory = await Category.updateOne({ _id: categoryId }, updateBody);

        return Promise.resolve(updatedCategory);

    } catch (error) {
        return Promise.reject(error);  
    }
}

// exports
module.exports = {
    createCategory,
    readCategory,
    findUniqueCategory,
    updateCategory
}