// app.js

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://0.0.0.0:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Create Student collection with fields
  db.createCollection("Student", function(err, res) {
    if (err) throw err;
    console.log("Student collection created!");

    // Add multiple documents with student data
    const students = [
      { Sid: 1, Name: "John Doe", Subject: "Maths", Branch: "Science", Mark: 80 },
      { Sid: 2, Name: "Jane Smith", Subject: "English", Branch: "Arts", Mark: 90 },
      { Sid: 3, Name: "Bob Johnson", Subject: "Science", Branch: "Science", Mark: 75 }
    ];
    db.collection("Student").insertMany(students, function(err, res) {
      if (err) throw err;
      console.log("Multiple students inserted!");

      // Sort (in ascending order) the student details with marks and display them in the console window
      db.collection("Student").find().sort({ Mark: 1 }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
      });
    });
  });
});
