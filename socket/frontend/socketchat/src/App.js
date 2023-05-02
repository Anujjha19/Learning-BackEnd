import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
 import { nanoid } from 'nanoid'

//no dotenv
// const socket = io("http://localhost:5000")
const socket = io.connect("http://localhost:5000")
const userName = nanoid(4)


const App = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit('chat', { message , userName })
    setMessage("");
  }
  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload])
    })
  })

  return (
    <div>
      <h1> Socket Chat  </h1>
      {chat.map((payload, index) => {
        return (
          <p key={index}>{payload.message} : <span> id: {payload.userName}</span></p>
        )
      })}
      <form onSubmit={sendChat} >
        <input type="text" name="chat" placeholder='Send Text' value={message} onChange={(e) => {
          setMessage(e.target.value)
        }} />
        <button type="submit">Send</button>
      </form>


    </div>
  )
}
export default App