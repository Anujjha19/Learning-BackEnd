const express = require('express')
const app = express();

const path = require('path')

const http = require('http').Server(app);
const port = process.env.PORT || 8000;

//attach http to socket.io
const io = require('socket.io')(http);


//route
app.get('/', (req, res) => {
    // res.json("Get Request");
    res.sendFile(path.join(__dirname, './src/index.html'))
})


//Create new Connection
io.on("connection", socket => {
    console.log("A user Connected ");

    socket.on('disconnect', () => {
        console.log("Disconnected User ")
    })

    socket.on("message", msg => {
        console.log("Client Message: " + msg)
    })

    socket.emit("server" ,"Received from Server")
    socket.emit("server1" ,"Received from Server1")
})




http.listen(port, () => {
    console.log(`App listening on Port : ${port} `);
})

/* app.listen(port, () => {
    console.log(`App listening on Port : ${port} `);
}) */