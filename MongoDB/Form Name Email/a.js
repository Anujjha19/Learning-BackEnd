const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/my-database', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Create a schema for our data
const dataSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Create a model for our data
const Data = mongoose.model('Data', dataSchema);

// Initialize the app
const app = express();

// Set up middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.use(express.static('../public'));

// Handle form submission
// Handle form submission
app.post('/submit', async (req, res) => {
  const data = new Data({
    name: req.body.name,
    email: req.body.email
  });
  await data.save();
  res.json(data);
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
