
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;


require("./db/connection")
const { json } = require('express')
const path = require('path')
const static_path = path.join(__dirname, "../public")


app.use(express.static(static_path))
app.use(express.urlencoded({ extended: false }))

const hbs = require('hbs')
const views_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")
app.set("view engine", "hbs");
app.set('views', views_path);
hbs.registerPartials(partials_path);

const Register = require("./models/register")
app.use(express.json())

app.get("/", async (req, res) => {
    try {
        res.render("index")
    }
    catch (e) {
        console.log(e);
    }
})
app.get('/register', (req, res) => {
    res.render("register")
})
app.get('/login', (req, res) => {
    res.render("login")
})
app.post('/register', async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassword) {
            const regsiterEmployee = new Register({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirmpassword: cpassword,
            })
            //Save
            const registered = await regsiterEmployee.save();
            res.status(201).render('index');
        } else {
            res.send("Password need to be same")
        }
    } catch (e) {
        res.status(400).send(e)
    }
})


app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const checkEmail = await Register.findOne({ email: email })
        if (checkEmail.password === password) {
            res.status(201).render('index')
        }else{
            res.send("Password Wrong")
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.listen(port, () => {
    console.log(`Server is listening on ${port} `)
})

