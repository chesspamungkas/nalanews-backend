// imports
const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema definition
const categorySchema = new Schema({
    category: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    }
});

const Category = mongoose.model('Category', categorySchema);
  
// exports
module.exports = {
    Category
};