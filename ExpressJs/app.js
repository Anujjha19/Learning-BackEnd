

const express = require('express')
const app = express()

let { people } = require('./data')

//Static Assests
app.use(express.static('./methods-public'))


/* GET methods { Read Data } in Express - HTTP methods  */
app.get('/api/people' , ( req ,res) => {
    res.status(200).json( { success: true , data : people} )
})

/* POST methods { Insert Data } in Express - HTTP methods  */




/* PUT methods { Updata Data } in Express - HTTP methods  */





/* Delete methods { Delete Data } in Express - HTTP methods  */



app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
