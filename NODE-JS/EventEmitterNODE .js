// In Node.js, the EventEmitter class is a core module that provides event-driven programming functionality. It allows us to create custom events and handle them using listeners.

// Here's an example of how to use EventEmitter in Node.js:

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// Event listener
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });

// Emitting the event
// myEmitter.emit('event');



/* In the example above, we are creating a custom event called 'event' using EventEmitter. Then, we add a listener to this event using the on() method. When we emit the event using the emit() method, the listener function will be executed and 'an event occurred!' will be printed to the console.

You can also pass arguments to the listener function by passing them as additional arguments to the emit() method:

myEmitter.on('sum', (a, b) => {
console.log(`${a} + ${b} = ${a + b}`);
});

myEmitter.emit('sum', 2, 3);
In this case, when we emit the 'sum' event with the arguments 2 and 3, the listener function will log 2 + 3 = 5 to the console.
*/




/* A Basic Event Emitter in NOde */
const EventEmitter = require('events');
const customEmitter = new EventEmitter();
customEmitter.on('response', () => {
    console.log('Data Received')
})
customEmitter.emit('response')




/* 
Point 1  - Multiple Eveent s
customEmitter.on('response', () => {
    console.log('Data Received')
})

customEmitter.on('response', () => {
    console.log('Multiple Eveents 1 ')
})

Point 2   -  Orders Matters , First Listen then Emit for an Event 

WRONG WAY 


const EventEmitter = require('events');
const customEmitter = new EventEmitter();
customEmitter.emit('response')

customEmitter.on('response', () => {
    console.log('Data Received')
})

Point 3 - We can Pass Afrumenet When we r emiting the Event

const EventEmitter = require('events');
const customEmitter = new EventEmitter();
customEmitter.on('response', (name , age ) => {
    console.log( ` Name : ${name} and Age : ${ age }`);
    console.log('Data Received')
})
customEmitter.emit('response' , 'Anuj' , '21')


*/

const http = require('http');

const server = http.createServer()
server.on( 'request' , ( req , res) => {
    res.end("Welcome ")

}) 

server.listen(5000)  