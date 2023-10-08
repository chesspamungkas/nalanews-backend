// imports
const express = require('express');
const createErrors = require('http-errors');
const userCtrl = require('../controllers/user.controller');

const {
    validateRegisterReq,
    validateLoginReq
} = require('../middlewares/user.middleware');
const {
    verifyAccessToken
} = require('../helpers/jwt.helper');

var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/users')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.' + file.originalname.split('.').reverse()[0])
    }
});

const fileFilter = (req, file, cb) => {
    if( file.mimetype != 'image/jpeg' && file.mimetype != 'image/png' ) {
        cb(null, false);
        cb(createErrors.BadRequest("File type must be of jpg, jpeg or png!"));
    } else if( !req.body.email ) {
        cb(null, false);
        cb(createErrors.BadRequest("Email must not be empty!"));
    } else if( !req.body.first_name ) {
        cb(null, false);
        cb(createErrors.BadRequest("First name must not be empty!"));
    } else if( !req.body.last_name ) {
        cb(null, false);
        cb(createErrors.BadRequest("Last name must not be empty!"));
    } else {
        cb(null, true);
    }
};

var upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 1024*1024*1
    },
    fileFilter: fileFilter
});

// constants
const router = express.Router();

// route: user/
router.post('/register', validateRegisterReq, userCtrl.registerUser);
router.post('/login', validateLoginReq, userCtrl.loginUser);
router.put('/editProfile', verifyAccessToken, upload.single('img'),verifyAccessToken, userCtrl.editUser);
router.post ('/refreshToken', userCtrl.refreshToken);
router.get('/myProfile', verifyAccessToken, userCtrl.myProfile);
router.get('/authorProfile/:authorId', userCtrl.getAuthorProfile);
router.delete('/logout', userCtrl.logout);


// exports
module.exports = router;