const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
  // Send details to server
  const details = { name: 'Jane Doe', age: 25, grade: 'B' };
  client.write(JSON.stringify(details));
});

// Receive "Thank you" message from server
client.on('data', (data) => {
  console.log(data.toString());
  
  // Close connection after receiving "Thank you" message
  client.end();
});

// Handle connection errors
client.on('error', (err) => {
  console.error(err);
});
