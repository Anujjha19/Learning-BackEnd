

const express = require('express')
const app = express()
const logger = require('./logger-MiddleWare')

// Request  => MiddleWare => resolve ( Send/Pass  the Response )



//Adding MiddleWare to All the Route at Once  and Orders ( i.e Positions Matters of Placing MiddleWare )
// app.use(logger)   => Apply to All
app.use( '/api' , logger)  // Will Get Aplly to only those whose path ( route ) is starting from => /api/



app.get('/' , (req, res) => {
    res.send(" <h3> Home Page </h3>")
})
app.get('/about' , (req, res) => {
    res.send(" <h3> About Page </h3>")
})
app.get('/api/products' , (req, res) => {
    res.send(" <h3> Api Product Page </h3>")
})

app.get('/api/items' , (req, res) => {
    res.send(" <h3> Api Items  Page </h3>")
})


app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
 