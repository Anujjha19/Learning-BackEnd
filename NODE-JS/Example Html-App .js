const http = require('http')
const { readFileSync } = require('fs');

//Get ALL FILES 
const homePage = readFileSync('./index.html')
const homeStyles = readFileSync('./styles.css')
const homeImage = readFileSync('./logo.svg')
const homeLogic = readFileSync('./browserApp.js')

const server = http.createServer((req, res) => {

    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage);
        res.end()
    }
    else if (url === '/browserApp') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic);
        res.end()
    }
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles);
        res.end()
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage);
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1> ERROR PAGE  </h1>');
        res.end()
    }

})

server.listen(5000)
