const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/cbt")
    .then(() => {
        console.log("Mongo DB Connected ")
    })
    .catch((err) => {
        console.log("Eroor ", err)
    })

const resultSchema = new mongoose.Schema({
    num1: Number,
    num2: Number,
    result: Number
});

const Result = mongoose.model('Result', resultSchema);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/add', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const result = num1 + num2;

    const newResult = new Result({ num1, num2, result });
    newResult.save({ bufferTimeoutMS: 30000 })
        .then(() => console.log('Result saved to database'))
        .catch(err => console.error('Could not save result to database', err));

    res.redirect(`/add?result=${result}`);
});

app.get('/add', (req, res) => {
    const result = req.query.result;
    res.send(`<h1>Result: ${result}</h1>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
