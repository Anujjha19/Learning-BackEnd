
// const app = require('express');
// const app = express()


const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(' User Hit The Home RESOURCE ')
    res.status(200).send(' Home Page ')
})
app.get('/about', (req, res) => {
    console.log(' User Hit The About RESOURCE ')
    res.status(200).send(' About Page ')
})
app.get('/contact', (req, res) => {
    console.log(' User Hit The Contact RESOURCE ')
    res.status(200).send(' Contact Page ')
})

app.all('*' ,(req, res) =>{
    console.log(' User Hit The WRONG RESOURCE ')
    res.status(404).send(' <h1> No Resoure </h1>')
})



app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
