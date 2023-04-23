//Describing a Schema

//2
const mongoose = require('mongoose')
const validator = require('validator')


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, " Email Id Already Present "],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email ")
            }
        }
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Invalid phone number');
            }
        }
    },
    address: {
        type: String,
        required: true,
    }
})

//3

//We Will create a New Collection
const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;