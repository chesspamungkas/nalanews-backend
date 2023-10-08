// imports
const mongoose = require('mongoose');
const utils = require('../util');
const { Schema } = mongoose;

// shcema definition
const userSchema = new Schema({
    profile_image: {
        type: String,
        default: 'https://res.cloudinary.com/dzsazqcec/image/upload/v1696613628/profiles/classic-portrait-silhouette-man_k8tmji.jpg'
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    joined: {
        type: String,
        default: utils.getCurretDate()
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

// exports
module.exports = {
    User
};