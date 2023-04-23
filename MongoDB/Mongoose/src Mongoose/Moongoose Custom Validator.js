const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["comedy", "action", "sci-fi"],
    },
    rating: {
        type: Number,
        validate(value) {
            if (value < 0 || value > 5) {
                throw new Error("Rating Should be from 0 to 5 ")
            }
        }
    },
    actor: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    }
});
const Videos = new mongoose.model("Videos", videoSchema);

