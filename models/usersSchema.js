const mongoose = require("mongoose");
const validator = require("validator");

const usersSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("not valid email")
            }
        }
    },
    FatherName: {
        type: String,
        required: true,
        trim: true
    },
    class1: {
        type: String,
        required: true,
        trim: true
    },
    roll1: {
        type: String,
        required: true,
        unique: true,
        maxlength: 5
    },
    dob1: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    gender: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    datecreated: Date,
    dateUpdated: Date
});

// model
const users = new mongoose.model("users", usersSchema);

module.exports = users;