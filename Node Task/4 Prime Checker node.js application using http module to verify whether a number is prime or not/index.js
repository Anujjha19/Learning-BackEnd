const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Serve the HTML file with the form
        fs.readFile('./public/index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && req.url === '/check') {
        // Read the number from the request body
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const num = parseInt(body.split('=')[1]);
            let isPrime = true;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(isPrime ? `${num} is prime` : `${num} is not prime`);
        });
    } else {
        // Handle all other requests with a 404 error
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
