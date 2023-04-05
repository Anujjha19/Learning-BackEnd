const http = require('http');

const port = 3000;
const HOME_URL = '/';
const ABOUT_URL = '/about';

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === HOME_URL) {
        res.end(`Welcome to the home page`);
    }

    if (req.url === ABOUT_URL) {
        res.end(`Welcome to our short history about`);
    }

    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find what you're looking for.</p>
    <a href="${HOME_URL}">Back Home</a>
  `);

});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});



/* const http = require('http');

const port = process.env.PORT || 3000 ;

const server = http.createServer(( req , res ) => {  //console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-type' , 'text/html');
    res.end( '<h1>Am Creating a Http Server .</h1> <p> Http Server !! </p>')
})
server.listen( port , () => {
    console.log(`Server is listening on port : ${port} `)
}); */