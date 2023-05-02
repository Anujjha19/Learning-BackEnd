var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.post('/sign_up', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.password;
    var phone = req.body.phone;

    var data = {
        "name": name,
        "email": email,
        "password": pass,
        "phone": phone
    }
    db.collection('details').insertOne(data, { wtimeout: 30000 }, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
    

    return res.redirect('signup_success.html');
})


app.get('/', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('index.html');
});

app.get('/signup_success.html', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.sendFile(__dirname + '/public/signup_success.html');
});

app.listen(3000, function () {
    console.log("server listening at port 3000");
});
