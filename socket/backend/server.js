const express = require("express")
const app = express();

const server = require('http').createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});
io.on('connection', (socket) => {
    console.log("What is Socket :", socket);
    console.log("Socket is active to be a connected ")

    socket.on('chat', (payload) => {
        console.log("What is payload :", payload);
        io.emit('chat', payload)
    })
})

// app.listen(5000 , () => console.log('Server is active ...5000 '))
server.listen(5000, () => {
    console.log('Server is listening ...   5000 ')
})
