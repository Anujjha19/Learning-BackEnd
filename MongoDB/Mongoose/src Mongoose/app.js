
const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/restAPI22", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
}).then(() => {
    console.log("Connected to MongoDB successfully!");
}).catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});


