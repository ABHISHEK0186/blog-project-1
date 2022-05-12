const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        trim: true,
        required: "first name is required"
    },
    lname: {
        type: String,
        trim: true,
        required: "last name is required"
    },
    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"]
    },
    email: {
        type: String,
        unique: true,
        required: "Email is required"
    },
    password: {
        type: String,
        required: "password is required"
    }
}, { timestamps: true });

module.exports = mongoose.model('blogProject_author', authorSchema) 



