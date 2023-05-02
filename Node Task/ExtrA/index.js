const express = require('express');
const app = express();

// Serve the HTML file with the input field and button
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Button Click Example</title>
      </head>
      <body>
        <input type="text" id="myInput">
        <button id="myButton">Click me!</button>
        <div id="output"></div>
        <script>
          const button = document.getElementById('myButton');
          const input = document.getElementById('myInput');
          const output = document.getElementById('output');
          button.addEventListener('click', () => {
            const value = input.value;
            fetch('/api/values?value=' + encodeURIComponent(value))
              .then(response => response.json())
              .then(data => {
                output.innerText = data.join(', ');
              });
          });
        </script>
      </body>
    </html>
  `);
});

// Respond with the entered value when the API is called
app.get('/api/values', (req, res) => {
  const value = req.query.value;
  const values = value.split(',');
  res.json(values);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
