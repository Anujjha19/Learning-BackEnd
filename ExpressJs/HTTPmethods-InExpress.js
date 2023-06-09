

const express = require('express')
const app = express()

let { people } = require('./data')



//Static Assests
app.use(express.static('./methods-public'))
//Parse Form Data
app.use(express.urlencoded({ extended: false }))


//Parse Json Data 
app.use(express.json())

/* GET methods { Read Data } in Express - HTTP methods  */
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

/* POST methods { Insert Data } in Express - HTTP methods  */

//JavaScript Examples
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ success: false, message: "Please Provide name Value " })
    }
    res.status(201).json({ success: true, person: name })

})

//FORM Examples 
app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name} `)
    }
    res.status(401).send(` Please Provide Credentials  `)
})


//Another Post Route Testing POSTMAN
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ success: false, message: "Please Provide name Value " })
    }
    res.status(201).json({ success: true, data: [...people, name] })
})



/* PUT methods { Updata Data } in Express - HTTP methods  */

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    // console.log(id, name);
    // res.send('Hello World ')
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res
            .status(404)
            .json({
                success: false, message: `No person with ${id} you
    are looking ` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ success: true, data: newPeople })
})



/* Delete methods { Delete Data } in Express - HTTP methods  */


app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
