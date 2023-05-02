/* const http = require('http');
const url = require('url');
const fs = require('fs');

// Function to calculate the nth Fibonacci number
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Create a server
http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Serve the client page on GET request
    if (parsedUrl.pathname === '/' && req.method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('404 Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }

    // Calculate the Fibonacci number on POST request
    if (parsedUrl.pathname === '/fibonacci' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const n = parseInt(body.split('=')[1]);
            const result = fibonacci(n);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`The ${n}th Fibonacci number is ${result}`);
            return res.end();
        });
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
 */


const http = require('http');
const url = require('url');
const fs = require('fs');

// Function to generate the Fibonacci sequence up to n
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

// Create a server
http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Serve the client page on GET request
    if (parsedUrl.pathname === '/' && req.method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('404 Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }

    // Generate the Fibonacci sequence on POST request
    if (parsedUrl.pathname === '/fibonacci' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const n = parseInt(body.split('=')[1]);
            const sequence = fibonacci(n);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(sequence));
            return res.end();
        });
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
