const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type : String,
        unique : true,
        min : 10,
        max : 16
    },
    phoneNumber : {
        type : Number,
        min : 10
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

//create a model
const User = mongoose.model('User',userSchema)

//export owner model
module.exports = User