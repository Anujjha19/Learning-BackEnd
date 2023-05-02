const net = require('net');

const server = net.createServer((socket) => {
  // Display student details in server terminal
  console.log('Student details:', { name: 'John Doe', age: 20, grade: 'A' });
  
  // Send "Thank you" message to client
  socket.write('Thank you');
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
