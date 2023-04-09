

const express = require('express')
const app = express()

const path = require('path')

//Setup Static and MiddleWare
app.use(express.static('./public'))

/* app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './index.html'))
    // res.sendFile(path.join(__dirname, '../NODE-JS/index.html'))
}) */


/* 
METHOD 1 Adding to the Static Assest 
Added index.html to static file 
*/


/* METHOD 2  Server Side Rendering ( SSR )  */



app.all('*', (req, res) => {
    res.status(404).send(' Resource Not Found ')
})
app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
