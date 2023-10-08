// imports
const express = require('express');
const createErrors = require('http-errors');
const blogCtrl = require('../controllers/blog.controller');

const {
    verifyAccessToken
} = require('../helpers/jwt.helper');

var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/blogs')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.' + file.originalname.split('.').reverse()[0])
    }
});

const fileFilter = (req, file, cb) => {

    if( file.mimetype != 'image/jpeg' && file.mimetype != 'image/png' ) {
        cb(null, false);
        cb(createErrors.BadRequest("File type must be of jpg, jpeg or png!"));
    } else if( !req.body.title ) {
        cb(null, false);
        cb(createErrors.BadRequest("News Title must not be empty!"));
    } else if( !req.body.country ) {
        cb(null, false);
        cb(createErrors.BadRequest("Country must not be empty!"));
    } else if( !req.body.category ) {
        cb(null, false);
        cb(createErrors.BadRequest("Category must not be empty!"));
    } else if( !req.body.body ) {
        cb(null, false);
        cb(createErrors.BadRequest("Body must not be empty!"));
    } else {
        cb(null, true);
    }
};

var upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 1024*1024*3
    },
    fileFilter: fileFilter
});

// constants
const router = express.Router();

// route: blog/
router.post('/', verifyAccessToken, upload.single('img'), verifyAccessToken, blogCtrl.createBlog);
router.put('/editBlog', verifyAccessToken, upload.single('img'), verifyAccessToken, blogCtrl.editBlog);
router.delete('/:blogId', verifyAccessToken, blogCtrl.deleteBlog);
router.get('/details/:blogId', blogCtrl.getSingleBlog);
router.get('/country/:countryId?', blogCtrl.getBlogCountryList);
router.get('/category/:categoryId?', blogCtrl.getBlogCategoryList);
router.get('/:authorId?/:countryId?', blogCtrl.getBlogCountryUserList);
router.get('/:authorId?/:categoryId?', blogCtrl.getBlogCategoryUserList);

// exports
module.exports = router;