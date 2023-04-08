// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log("User hit the Server ")
//     res.end('<h1> Home Page </h1>')
// })
// server.listen(5000)


/*  Basics  */
const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req)
    // console.log(req.method)
    // console.log(req.url)
    res.writeHead(200, { 'content-type': 'image/html' })
    res.write('<h1> Home Page </h1>')
    res.end()
})
server.listen(5000)   

/* Condition To Move to Various Parts  */