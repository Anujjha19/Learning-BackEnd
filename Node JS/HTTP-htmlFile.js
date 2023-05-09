const http = require('http')
const { readFileSync } = require('fs');

//Get ALL FILES 
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {

    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage);
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1> ABOUT Page </h1>');
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1> ERROR PAGE  </h1>');
        res.end()
    }

})

server.listen(5000)
