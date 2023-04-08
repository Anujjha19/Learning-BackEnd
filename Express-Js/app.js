

const express = require('express')
const app = express()

const path = require('path')

//Setup Static and MiddleWare
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './index.html'))
    // res.sendFile(path.join(__dirname, '../NODE-JS/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send(' Resource Not Found ')
})
app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
