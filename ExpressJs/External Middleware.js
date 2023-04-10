

const express = require('express')
const app = express()

const morgan = require('morgan')

app.use(morgan('tiny'))


app.get('/', (req, res) => {
    res.send(" <h3> Home Page </h3>")
})
app.get('/about', (req, res) => {
    res.send(" <h3> About Page </h3>")
})
app.get('/api/products', (req, res) => {
    res.send(" <h3> Api Product Page </h3>")
})


app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
