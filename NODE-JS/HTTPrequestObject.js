const http = require('http')

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {
        res.write('<h1> HOME Page </h1>');
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end()
    }
    else if (url === '/about') {
        res.write('<h1> ABOUT Page </h1>');
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end()
    }
    else if (url === '/contact') {
        res.write('<h1> CONTACT Page </h1>');
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end()
    }
    else {
        res.write('<h1> ERROR PAGE  </h1>');
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end()
    }

})

server.listen(5000)
