const http = require('http');

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-type', 'text/html');
    console.log(req.url);

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Am Creating a Http Server .</h1> <p> For the File website.js  Server !! </p>')
    }

    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> About In Else If .</h1> <p> For the File website.js  ABOUT  !! </p>')
    }

    else {
        //res.anuj(); //This site can’t be reached { to Crash the Server }
        res.statusCode = 404;
        res.end('<h1> Error Page Not Found  </h1> <p> For the File website.js  ERROR !! </p>')
    }

})
server.listen(port, () => {
    console.log(`Server is listening on port : ${port} `)
});