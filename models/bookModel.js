let mongoose = require('mongoose');

let bookSchema = mongoose.Schema({
    name: String,
    genre: String,
    author: String
});

let Books = mongoose.model('Books', bookSchema);

module.exports = Books; 