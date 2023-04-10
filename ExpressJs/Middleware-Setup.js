

const express = require('express')
const app = express()


// Request  => MiddleWare => resolve ( Send/Pass  the Response )

/* //Every time we need to write method , url ,time if we wanted to get so to fix this we have other way described Below 
app.get( '/' , (req , res ) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log( method , url , time);
    res.send( " <h3> Home Page </h3>")
})

app.get( '/about' , (req , res ) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log( method , url , time);
    res.send( " <h3> About Page </h3>")
})
*/


const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send( " Middle-Ware Logger ")
    next();
}



app.get('/', logger, (req, res) => {
    res.send(" <h3> Home Page </h3>")
})
app.get('/about', logger, (req, res) => {
    res.send(" <h3> About Page </h3>")
})
app.get('/contact', logger, (req, res) => {
    res.send(" <h3> Contact Page </h3>")
})


app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
