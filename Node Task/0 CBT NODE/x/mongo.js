const mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost:27017/cbt")

mongoose.connect("mongodb://0.0.0.0:27017/cbt")
    .then(() => {
        console.log("Mongo DB Connected ")
    })
    .catch((err) => {
        console.log("Eroor ", err)
    })

const cbtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model('cbtcollection', cbtSchema)

const data = [
    {
        name: "Anuj",
        email: "anujjha710@gmail.com",
        password: 1234
    },
    {
        name: "Dummy",
        email: "dummy@gmail.com",
        password: 1234
    }
];

collection.insertMany(data)
    .then(() => {
        console.log("Documents inserted successfully");
    })
    .catch((err) => {
        console.log("Error inserting documents", err);
    });

