const express = require('express');
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { errors: [] });
});

app.post('/', [
    check('name').notEmpty().withMessage('Name is required'),
    check('regNo').notEmpty().withMessage('Registration number is required'),
    check('rollNo').notEmpty().withMessage('Roll number is required'),
    check('mobileNo').notEmpty().withMessage('Mobile number is required'),
    check('mobileNo').isLength({ min: 10, max: 10 }).withMessage('Mobile number should be 10 digits'),
    check('email').notEmpty().withMessage('Email is required'),
    check('email').isEmail().withMessage('Invalid email address')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('index', { errors: errors.array() });
    }
    res.send('Data submitted successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
