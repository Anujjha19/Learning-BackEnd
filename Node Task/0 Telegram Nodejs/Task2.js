/*  Create a NodeJS application to create a http request that opens a registration from which contains Name,Email,Mobile number and connect to the local MongoDB local database and adds data a collection named student_registration
 */

const http = require('http');
const url = require('url');
const qs = require('querystring');
const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'student_registration';

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const html = `
      <html>
        <head>
          <title>Registration Form</title>
        </head>
        <body>
          <h1>Registration Form</h1>
          <form method="POST" action="/">
            <label>Name:</label>
            <input type="text" name="name" required><br><br>
            <label>Email:</label>
            <input type="email" name="email" required><br><br>
            <label>Mobile Number:</label>
            <input type="tel" name="mobile" required><br><br>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { name, email, mobile } = qs.parse(body);
            const studentData = { name, email, mobile };
            MongoClient.connect(mongoUrl, (err, client) => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                } else {
                    const db = client.db(dbName);
                    db.collection('student_registration').insertOne(studentData, (err, result) => {
                        if (err) {
                            console.error(err);
                            res.statusCode = 500;
                            res.end('Internal Server Error');
                        } else {
                            res.writeHead(200, { 'Content-Type': 'text/plain' });
                            res.end('Registration Successful!');
                        }
                        client.close();
                    });
                }
            });
        });
    } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});


// http module is used to create an HTTP server
// url module is used to parse the URL of the request
// qs module is used to parse the body of the POST request
// MongoClient class from mongodb module is used to connect to the MongoDB server
// mongoUrl is the URL of the local MongoDB server
// dbName is the name of the MongoDB database to use
// A callback function is passed to createServer() method, which is executed when a request is received
// If the request method is GET, a registration form is returned as an HTML response
// If the request method is POST, the body of the request is parsed using qs.parse(), and the data is stored in an object named studentData
// MongoClient.connect() method is called to connect to the MongoDB server
// db.collection() method is used to get the collection named 'student_registration'
// insertOne() method is used to insert the studentData object into the collection
// If an error occurs during the database operation, a 500 error response is sent with an