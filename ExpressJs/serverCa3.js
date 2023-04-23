const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let numUsers = 0;

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  let addedUser = false;

  socket.on('add user', (username) => {
    if (addedUser) return;

    socket.username = username;
    ++numUsers;
    addedUser = true;

    socket.emit('login', {
      numUsers: numUsers
    });

    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  socket.on('new message', (data) => {
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;

      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});


/* Create a NodeJs socket.io application to make a chat application with displaying number of users connected and displyaing the message 'A user Left' When a user leaves the chat room.

 */