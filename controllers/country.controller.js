// imports
const countryService = require('../services/country.service');
const blogService = require('../services/blog.service');
const utils = require('../util');

const createCountry = async(req, res, next) => {
    try {
        
        let countryBody = req.body;

        const savedCountry = await countryService.createCountry(countryBody);
        res.send(savedCountry);

    } catch (error) {
        next(error);
    }
}

const getCountries = async(req, res, next) => {
    try {

        let searchParams = {};
        const countries = await countryService.readCountry(searchParams);
        res.send(countries);

    } catch (error) {
        next(error);
    }
}

const editCountry = async(req, res, next) => {
    try {

        let countryBody = req.body;

        await countryService.updateCountry(countryBody);

        const updatedCountry = await countryService.findUniqueCountry({_id: countryBody.countryId}, ['_id', 'country', 'code']);
        
        res.send(updatedCountry);

    } catch (error) {
        next(error);
    }
}

const deleteCountry = async(req, res, next) => {
    try {
        let searchParams = { _id: req.params.countryId };

        let country = await countryService.findUniqueCountry({_id: req.params.countryId}, ['_id', 'country', 'code']);
        if( country.length == 0 ) {
            throw createErrors.NotFound('This country does not exists');
        }

        const deletedCountry = await countryService.deleteCountry(searchParams);

        res.send("Country deleted successfully!");

    } catch (error) {
        next(error);
    }
}

const getCountryBlogCount = async(req, res, next) => {
    try {

        let searchParams = {};

        let authorId = req.params.authorId;
        if( authorId && authorId.toLowerCase() != 'all' ) {
            searchParams.author = authorId;
        }

        let countries = await countryService.readCountry();

        let count = [];

        countries.forEach(c => {
            searchParams.country = c._id;
            count.push(
                blogService.countBlogs(searchParams)
            );
        });

        count = await Promise.all(count);

        const result = utils.combineArrayObjectAndArray(countries, ['_id', 'country', 'code'], count, 'count')

        res.send(result);

    } catch (error) {
        next(error);
    }
}

 // exports
 module.exports = {
    createCountry,
    editCountry,
    deleteCountry,
    getCountries,
    getCountryBlogCount
 }