const validator = require('validator')


const videoSchema = new mongoose.Schema({
    rating: {
        type: Number,
        validate(value) {
            if (value < 0 || value > 5) {
                throw new Error("Rating Should be from 0 to 5 ")
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(" Invalid Email ");
            }
        }
    },
});
const Videos = new mongoose.model("Videos", videoSchema);




