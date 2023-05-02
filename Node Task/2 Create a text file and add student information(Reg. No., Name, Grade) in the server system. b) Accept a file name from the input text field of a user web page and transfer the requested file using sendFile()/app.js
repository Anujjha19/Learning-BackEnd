const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests to add student information to the server
app.post('/students', (req, res) => {
    const { regNo, name, grade } = req.body;
    const data = `${regNo}, ${name}, ${grade}\n`;

    fs.appendFile(path.join(__dirname, 'server', 'students.txt'), data, err => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to file');
        } else {
            res.send('Student information added successfully');
        }
    });
});

// Handle GET requests to download a file from the server
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, 'server', filename);

    fs.stat(filepath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.status(404).send('File not found');
        } else {
            res.sendFile(filepath);
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
