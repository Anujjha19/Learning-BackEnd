const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/my-database', { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Create a schema for our data
const dataSchema = new mongoose.Schema({
    num1: Number,
    num2: Number,
    result: Number
});

// Create a model for our data
const Data = mongoose.model('Data', dataSchema);

// Create a new Express app
const app = express();

// Use body-parser middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('../public'));

// Handle form submissions
app.post('/submit', (req, res) => {
    // Get the values of the two number fields
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);

    // Calculate the sum of the two numbers
    const result = num1 + num2;

    // Create a new data object with the submitted values and the result
    const newData = new Data({
        num1: num1,
        num2: num2,
        result: result
    });

    // Save the data object to the database
    newData.save()
        .then(() => {
            // Send a success response with the result in JSON format
            res.json({
                num1: num1,
                num2: num2,
                result: result
            });
        })
        .catch(err => {
            // Send an error response
            res.status(500).json({ error: err.message });
        });
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
