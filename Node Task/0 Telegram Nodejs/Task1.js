/* Crate a NodeJS application to that should open and read a file named "demo.txt" and prints the contents in the console,if the file is empty then print on console as"Empty File" */

const fs = require('fs');

fs.readFile('demo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else if (data.length === 0) {
        console.log('Empty File');
    } else {
        console.log(data);
    }
});


// fs module is used to work with files in Node.js
// readFile() method is used to read the contents of the file
// The first argument of readFile() method is the name of the file to be read
// The second argument is the encoding of the file. Here, we have used 'utf8' to read the file as a text file
// The callback function is called when the file is read. It takes two arguments, an error object if an error occurs, and the data read from the file as a string
// If an error occurs, the error object is printed to the console using console.error()
// If the file is empty, "Empty File" is printed to the console using console.log()
// If the file is not empty, the contents of the file are printed to the console using console.log()