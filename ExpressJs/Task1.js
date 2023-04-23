/*  Create a NodeJS application to create a http request that opens a registration from which contains Name,Email,Mobile number and connect to the local MongoDB local database and adds data a collection named student_registration
 */

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
console.log('Starting MongoDB connection...');
mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// Create a schema for student registration
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNumber: String
});

const User = mongoose.model('User', userSchema);

app.set('view engine', 'ejs');

// Render the registration form
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission
app.post('/', async (req, res) => {
  const data = new User(req.body);
  try {
    await data.save();
    res.send('Data saved successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving data!');
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
