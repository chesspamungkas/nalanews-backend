// imports
const createErrors = require('http-errors');
const userService = require('../services/user.service');
const jwtHelper = require('../helpers/jwt.helper');
const utils = require('../util');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cloudinary = require('../helpers/cloudinary.helper');

const registerUser = async(req, res, next) => {
    try {
        
        let userBody = req.body;

        userBody.password = await bcrypt.hash(userBody.password, saltRounds);
        const savedUser = await userService.createUser(userBody);

        const user = utils.makeObjectSelected(savedUser, ['_id', 'email', 'first_name', 'last_name']);
        const accessToken = await jwtHelper.signAccessToken(savedUser._id);
        const refreshToken = await jwtHelper.signRefreshToken(savedUser._id);
        
        res.send({
            user,
            accessToken,
            refreshToken
        });

    } catch (error) {
        next(error);
    }
}

const loginUser = async(req, res, next) => {
    try {
        
        const userBody = req.body;

        const findUser = await userService.findUniqueUser({email: userBody.email});
        const passMatch = await bcrypt.compare(userBody.password, findUser.password);

        if( !passMatch ) {
            throw createErrors.BadRequest('Incorrect email or password');
        }

        const accessToken = await jwtHelper.signAccessToken(findUser._id);
        const refreshToken = await jwtHelper.signRefreshToken(findUser._id);

        const user = utils.makeObjectSelected(findUser, ['_id', 'email', 'first_name', 'last_name']);

        res.send({
            user,
            accessToken,
            refreshToken
        });

    } catch (error) {
        if( error.status && error.status == 404 ) {
            error = createErrors.BadRequest('Incorrect email or password');
            next(error);
        }
        next(error);
    }
}

const editUser = async(req, res, next) => {
    try {

        let userBody = req.body;

        if( req.file ) {
            userBody.profile_image = req.file.path;

            const uploadResult = await cloudinary.uploader.upload(userBody.profile_image, {
                folder: "profiles"
            });
    
            if( uploadResult.secure_url ) {
                userBody.profile_image = uploadResult.secure_url;
            } else {
                throw createErrors.Forbidden("Opps, image upload failed! Try again.")
            }
        }

        await userService.updateUser(userBody);
        
        const updatedUser = await userService.findUniqueUser({_id: userBody.userId}, ['_id', 'email', 'first_name', 'last_name', '_id', 'email', 'first_name', 'profile_image']);
        
        res.send(updatedUser);

    } catch (error) {
        next(error);
    }
}

const refreshToken = async(req, res, next) => {
    try {
        
        let oldRefreshToken = req.body.refreshToken;

        if( !oldRefreshToken ) {
            throw createErrors.Forbidden('No refreshToken');
        }

        const userId = await jwtHelper.verifyRefreshToken(oldRefreshToken);
        if( !userId ) {
            throw createErrors.Forbidden('No refreshToken');
        }

        const accessToken = await jwtHelper.signAccessToken(userId);
        const refreshToken = await jwtHelper.signRefreshToken(userId);
        res.send({accessToken, refreshToken});

    } catch (error) {
        next(error);
    }
}

const myProfile = async(req, res, next) => {
    try {
        
        const userId = req.body.userId;
        let searchParams = { _id: userId };
        let selectFields = 'email first_name last_name joined profile_image'

        const user = await userService.findUniqueUser(searchParams, selectFields);

        res.send(user);

    } catch (error) {
        next(error);
    }
}

const getAuthorProfile = async(req, res, next) => {
    try {

        const userId = req.params.authorId;
        if( !userId ) {
            throw createErrors.BadRequest('No authorId');
        }

        let searchParams = { _id: userId };
        let selectFields = 'email first_name last_name joined profile_image';

        const user = await userService.findUniqueUser(searchParams, selectFields);
        res.send(user);

    } catch (error) {
        next(error);
    }
}

const logout = async(req, res, next) => {
    try {
          
        const { refreshToken } = req.body;

        if( !refreshToken ) {
            throw createErrors.BadRequest('No refreshToken exists!');
        }

        await jwtHelper.verifyRefreshToken(refreshToken);

        res.send("User Logout");

    } catch (err) {
        next(err);
    }
}

// exports
module.exports = {
    registerUser,
    loginUser,
    editUser,
    refreshToken,
    myProfile,
    getAuthorProfile,
    logout
}