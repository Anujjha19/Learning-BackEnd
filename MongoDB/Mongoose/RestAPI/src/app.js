
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


require("./db/connection")
const Student = require("./models/student")



app.use(express.json())
const StudentRouter = require('./routers/Express-Router-RESTAPI')
app.use(StudentRouter);



app.listen(port, () => {
    console.log(`Server is listening on ${port} `)
})

