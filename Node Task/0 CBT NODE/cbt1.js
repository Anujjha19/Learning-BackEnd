

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {

    const firstName = req.cookies.firstName || '';
    const lastName = req.cookies.lastName || '';


    res.send(`
    <html>
      <body>
        <h1>Enter your name:</h1>
        <form method="POST">
          <label for="firstName">First name:</label>
          <input type="text" name="firstName" id="firstName" value="${firstName}"/><br>
          <label for="lastName">Last name:</label>
          <input type="text" name="lastName" id="lastName" value="${lastName}"/><br>
          <input type="submit" name="submit" value="Set Cookie"/>
          <input type="submit" name="submit" value="Get Cookie"/>
          <input type="submit" name="submit" value="Delete Cookie"/>
        </form>
      </body>
    </html>
  `);
});

app.post('/', (req, res) => {
    const { firstName, lastName, submit } = req.body;


    if (submit === 'Set Cookie') {
        res.cookie('firstName', firstName);
        res.cookie('lastName', lastName);
        res.send(`Cookie set with name: ${firstName} ${lastName}`);
    }

    else if (submit === 'Get Cookie') {
        res.json(req.cookies);
    }

    else if (submit === 'Delete Cookie') {
        res.clearCookie('firstName');
        res.clearCookie('lastName');
        res.send('Cookie deleted');
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});