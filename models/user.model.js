// user model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, min: 18 }
})

const User = mongoose.model('User', userSchema)
module.exports = User