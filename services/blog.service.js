// imports
const createErrors = require('http-errors');
const { Blog } = require('../models/blog.model');
const utils = require('../util');

// CRUD
const createBlog = async(blogBody) => {
    try {

        const newBlog = new Blog(blogBody);
        let savedBlog = await newBlog.save();

        return Promise.resolve(savedBlog);

    } catch (error) {
        return Promise.reject(error);
    }
}

const findUniqueBlog = async(searchParams, selectFields = '') => {
    try {

        const blogResult = await Blog
        .findOne(searchParams)
        .select(selectFields);
        if( !blogResult ) {
            throw createErrors.NotFound('Incorrect information');
        }

        return Promise.resolve(blogResult);

    } catch (error) {

        if( error.name == 'CastError' ) {
            error = createErrors.BadRequest('Blog not found')
        }

        return Promise.reject(error);

    }
}

const updateBlog = async(blogBody) => {
    try {       

        const blogId = blogBody.blogId;
        const updateBody = utils.makeObjectExcept(blogBody, ['blogId']);
        const updatedBlog = await Blog.updateOne({ _id: blogId }, updateBody);

        return Promise.resolve(updatedBlog);

    } catch (error) {
        return Promise.reject(error);
    }
}

const deleteBlog = async(searchParams) => {
    try {

        const deletedBlog = await Blog.deleteOne(searchParams);
        return Promise.resolve(deletedBlog);

    } catch (error) {
        return Promise.reject(error);
    }
}

const readBlogs = async(
    searchParams = {}, 
    selectFields = '', 
    perPage = 99999999, 
    page = 0) => {

    try {

        const blogs = await Blog
        .find(searchParams)
        .limit(perPage)
        .skip(perPage * page)
        .populate('author', 'first_name last_name joined')
        .populate('country', 'country code')
        .populate('category', 'category')
        .select(selectFields);

        return Promise.resolve(blogs);

    } catch (error) {

        if( error.name == 'CastError' ) {
            error = createErrors.BadRequest('Blog not found');
        }

        return Promise.reject(error);
    }
}

const countBlogs = async(countParams) => {
    try {

        const numBlogs = await Blog
        .where(countParams)
        .countDocuments();

        return Promise.resolve(numBlogs);

    } catch (error) {

        if( error.name == 'CastError' ) {
            error = createErrors.BadRequest('Blog not found');
        }

        return Promise.reject(error);
    }
}

// exports
module.exports = {
    createBlog,
    findUniqueBlog,
    updateBlog,
    deleteBlog,
    readBlogs,
    countBlogs
}