// It is Added in SCHEMA 

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // this field is required
    },
    email: {
        type: String,
        required: true, // this field is required
        unique: true, // this field must be unique
        match: /^\S+@\S+\.\S+$/ // this field must match the specified regular expression
    },
    age: {
        type: Number,
        min: 18, // this field must be at least 18
        max: 65 // this field must be no more than 65
    },

});

const User = mongoose.model('User', userSchema);

const playlistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        // lowercase:true,
        uppercase: true,
        trim: true,
        minlength: [2, " Must be of length 2 "],
        maxlength: 10,
    },
    ctype: {
        type: String,
        lowercase: true,
        required: true,
        enum: ["Front End", "Back End", "Database"]
    },
    videos: {
        type: Number,
        min: 1,
        max: 500,
        required: true,
    },
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },

    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now,
    }
})
