// imports
const createErrors = require('http-errors');
const blogService = require('../services/blog.service');
const cloudinary = require('../helpers/cloudinary.helper');

const pageSize = 50;

const createBlog = async(req, res, next) => {
    try {
        
        let blogBody = req.body;

        if( req.file ) {
            blogBody.cover_image = req.file.path;

            const uploadResult = await cloudinary.uploader.upload(blogBody.cover_image, {
                folder: "blogs"
            });
    
            if( uploadResult.secure_url ) {
                blogBody.cover_image = uploadResult.secure_url;
            } else {
                throw createErrors.Forbidden("Opps, image upload failed! Try again.")
            }
        }

        blogBody.author = req.body.userId;

        const savedblog = await blogService.createBlog(blogBody)
        res.send(savedblog);

    } catch (error) {
        next(error);
    }
}

const editBlog = async(req, res, next) => {
    try {

        let blogBody = req.body;

        if( req.file ) {
            blogBody.cover_image = req.file.path;

            const uploadResult = await cloudinary.uploader.upload(blogBody.cover_image, {
                folder: "blogs"
            });
    
            if( uploadResult.secure_url ) {
                blogBody.cover_image = uploadResult.secure_url;
            } else {
                throw createErrors.Forbidden("Opps, image upload failed! Try again.")
            }
        }

        await blogService.updateBlog(blogBody);
        
        const updatedBlog = await blogService.findUniqueBlog({_id: blogBody.blogId}, ['_id', 'news_title', 'cover_image', 'country', 'category', 'body', 'excerpt', 'external_link']);
        
        res.send(updatedBlog);

    } catch (error) {
        next(error);
    }
}

const deleteBlog = async(req, res, next) => {
    try {
        let searchParams = { _id: req.params.blogId };
        let selectFields = '';

        let blog = await blogService.readBlogs(searchParams, selectFields);
        if( blog.length == 0 ) {
            throw createErrors.NotFound('This blog does not exists');
        }

        await blogService.deleteBlog(searchParams);

        res.send("Blog deleted successfully!");

    } catch (error) {
        next(error);
    }
}

const getSingleBlog = async(req, res, next) => {
    try {
        let searchParams = { _id: req.params.blogId };
        let selectFields = '';
        let blog = await blogService.readBlogs(searchParams, selectFields);

        blog = blog[0];
        if( !blog ) {
            throw createErrors.NotFound('No blog found with this blog id');
        }

        res.send(blog);

    } catch (error) {
        next(error);
    }
}

const getBlogCountryList = async(req, res, next) => {
    try {

        const countryId = req.params.countryId;

        let searchParams = {};
        if( countryId && countryId.toLowerCase() != 'all' ) {
            searchParams.country = countryId
        }

        let selectFields = 'cover_image news_title published body excerpt external_link';
        let perPage = pageSize;
        let page = req.query.page && req.query.page > 0 ? req.query.page-1 : 0;
        
        const numBlogs = await blogService.countBlogs(searchParams);
        let blogs = await blogService.readBlogs(searchParams, selectFields, perPage, page);
        
        let totalPages = Math.ceil(numBlogs / perPage);
        let currentPage = page+1;

        res.send({
            result: blogs, 
            totalBlogs: numBlogs,
            totalPages: totalPages,
            currentPage: currentPage
        });

    } catch (error) {
        next(error);
    }
}

const getBlogCategoryList = async(req, res, next) => {
    try {

        const categoryId = req.params.categoryId;
        
        let searchParams = {};
        if( categoryId && categoryId.toLowerCase() != 'all' ) {
            searchParams.category = categoryId
        }

        let selectFields = 'cover_image news_title published body excerpt external_link';
        let perPage = pageSize;
        let page = req.query.page && req.query.page > 0 ? req.query.page-1 : 0;

        
        const numBlogs = await blogService.countBlogs(searchParams);
        let blogs = await blogService.readBlogs(searchParams, selectFields, perPage, page);
        
        let totalPages = Math.ceil(numBlogs / perPage);
        let currentPage = page+1;

        res.send({
            result: blogs, 
            totalBlogs: numBlogs,
            totalPages: totalPages,
            currentPage: currentPage
        });

    } catch (error) {
        next(error);
    }
}

const getBlogCountryUserList = async(req, res, next) => {
    try {

        const authorId = req.params.authorId;
        const countryId = req.params.countryId;

        let searchParams = {};
        if( authorId && authorId.toLowerCase() != 'all' ) {
            searchParams.author = authorId;
        }
        if( countryId && countryId.toLowerCase() != 'all' ) {
            searchParams.country = countryId
        }

        let selectFields = 'cover_image news_title published body excerpt external_link';
        let perPage = pageSize;
        let page = req.query.page && req.query.page > 0 ? req.query.page-1 : 0;

        
        const numBlogs = await blogService.countBlogs(searchParams);
        let blogs = await blogService.readBlogs(searchParams, selectFields, perPage, page);
        
        let totalPages = Math.ceil(numBlogs / perPage);
        let currentPage = page+1;

        res.send({
            result: blogs, 
            totalBlogs: numBlogs,
            totalPages: totalPages,
            currentPage: currentPage
        });

    } catch (error) {
        next(error);
    }
}

const getBlogCategoryUserList = async(req, res, next) => {
    try {

        const authorId = req.params.authorId;
        const categoryId = req.params.categoryId;

        let searchParams = {};
        if( authorId && authorId.toLowerCase() != 'all' ) {
            searchParams.author = authorId;
        }
        if( categoryId && categoryId.toLowerCase() != 'all' ) {
            searchParams.category = categoryId
        }

        let selectFields = 'cover_image news_title published body excerpt external_link';
        let perPage = pageSize;
        let page = req.query.page && req.query.page > 0 ? req.query.page-1 : 0;

        
        const numBlogs = await blogService.countBlogs(searchParams);
        let blogs = await blogService.readBlogs(searchParams, selectFields, perPage, page);
        
        let totalPages = Math.ceil(numBlogs / perPage);
        let currentPage = page+1;

        res.send({
            result: blogs, 
            totalBlogs: numBlogs,
            totalPages: totalPages,
            currentPage: currentPage
        });

    } catch (error) {
        next(error);
    }
}

// exports
module.exports = {
    createBlog,
    editBlog,
    deleteBlog,
    getSingleBlog,
    getBlogCountryList,
    getBlogCategoryList,
    getBlogCountryUserList,
    getBlogCategoryUserList
}