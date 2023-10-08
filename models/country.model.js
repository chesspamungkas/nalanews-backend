// imports
const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema definition
const countrySchema = new Schema({
    country: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
});

const Country = mongoose.model('Country', countrySchema);
  
// exports
module.exports = {
    Country
};