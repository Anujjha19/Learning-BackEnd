const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static('public'));

// Serve index.html on root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Handle form submission
app.post('/calculate', (req, res) => {
    const num = parseInt(req.body.num);
    const operation = req.body.operation;

    if (!num || isNaN(num)) {
        return res.status(400).send('Invalid input');
    }


    let result;

    switch (operation) {
        case 'increment':
            result = num + 1;
            break;
        case 'decrement':
            result = num - 1;
            break;
        case 'square':
            result = num * num;
            break;
        default:
            result = 'Invalid operation';
    }

    res.send(`Result: ${result}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
