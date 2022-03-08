const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userShema =  new Schema(
    {
        email: String,
        password: String
    }
)

module.exports = mongoose.model('user',userShema,'users');