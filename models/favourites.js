var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// //Book Schema
var bookModel = new Schema({
    title: String,
    author: String,
    publisher: String,
    category: String,
    count: Number
}, { collection: "BooksDat1" });

module.exports = mongoose.model('Favourites', bookModel);