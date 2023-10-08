// imports
const express = require('express');
const countryCtrl = require('../controllers/country.controller');

// constants
const router = express.Router();
const {
    verifyAccessToken
} = require('../helpers/jwt.helper');

// route: country/
router.post('/', verifyAccessToken, countryCtrl.createCountry);
router.put('/editCountry', verifyAccessToken, countryCtrl.editCountry);
router.delete('/:countryId', verifyAccessToken, countryCtrl.deleteCountry);
router.get('/', countryCtrl.getCountries);
router.get('/countriesBlogs/:authorId?', countryCtrl.getCountryBlogCount);

// exports
module.exports = router;