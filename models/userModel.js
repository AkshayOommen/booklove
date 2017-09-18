let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    about: String
})

let Users = mongoose.model('Users', userSchema);

module.exports = Users;

