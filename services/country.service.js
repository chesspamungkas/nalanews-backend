// imports
const createErrors = require('http-errors');
const { Country } = require('../models/country.model');
const utils = require('../util');

// CRUD
const createCountry = async(countryBody) => {
    try {

        const newCountry = new Country(countryBody);
        const savedCountry = await newCountry.save();

        return Promise.resolve(savedCountry);

    } catch (error) {

        if( error.code && error.code == 11000 ) {
            error = createErrors.Forbidden(`${countryBody.country} or${countryBody.code}  already exists`);
            return Promise.reject(error);
        }

        return Promise.reject(error);

    }
}

const readCountry = async() => {
    try {

        const countries = await Country
        .find()
        .select(['_id', 'country', 'code']);

        return Promise.resolve(countries);

    } catch (error) {
        return Promise.reject(error);
    }
}

const findUniqueCountry = async(searchParams, selectFields = '') => {
    try {     

        const countryResult = await Country
        .findOne(searchParams)
        .select(selectFields);
        if( !countryResult ) {
            throw createErrors.NotFound('Incorrect information');
        }

        return Promise.resolve(countryResult);

    } catch (error) {

        if( error.name == 'CastError' ) {
            error = createErrors.BadRequest('Invalid countryId')
        }

        return Promise.reject(error);

    }
}

const updateCountry = async(countryBody) => {
    try {

        const countryId = countryBody.countryId;
        const updateBody = utils.makeObjectExcept(countryBody, ['countryId']);
        const updatedCountry = await Country.updateOne({ _id: countryId }, updateBody);

        return Promise.resolve(updatedCountry);

    } catch (error) {
        return Promise.reject(error);
    }
}

const deleteCountry = async(searchParams) => {
    try {

        const deletedCountry = await Country.deleteOne(searchParams);
        return Promise.resolve(deletedCountry);

    } catch (error) {
        return Promise.reject(error);
    }
}

// exports
module.exports = {
    createCountry,
    readCountry,
    findUniqueCountry,
    updateCountry,
    deleteCountry
}