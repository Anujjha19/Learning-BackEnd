

const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

//Static Assests
app.use(express.static('./methods-public'))
//Parse Form Data
app.use(express.urlencoded({ extended: false }))
//Parse Json Data 
app.use(express.json())


//Router In Express   => Import 
app.use('/api/people' , people )
app.use('/login' , auth )



app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
