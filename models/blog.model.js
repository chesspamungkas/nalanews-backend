// imports
const mongoose = require('mongoose');
const utils = require('../util');
const { Schema } = mongoose;

// shcema definition
const BlogSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    news_title:{
        type: String,
        required: true
    },
    cover_image: {
        type: String,
        default: 'https://res.cloudinary.com/dzsazqcec/image/upload/v1696613600/blogs/online-message-blog-chat-communication-envelop-graphic-icon-concept_bfcohk.jpg'
    },
    published: {
        type: String,
        default: utils.getCurretDate()
    },
    country: {
        type: Schema.Types.ObjectId, 
        ref: 'Country',
        required: true
    },
    category: {
        type: Schema.Types.ObjectId, 
        ref: 'Category',
        required: true
    },
    body: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    external_link: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

// exports
module.exports = {
    Blog
};