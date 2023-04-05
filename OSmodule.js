// const { a, b}  = require('os')

const os = require("os");

//Info About Current User
const user = os.userInfo();
console.log(user);
/* {
    uid: -1,
    gid: -1,
    username: 'jhaan',
    homedir: 'C:\\Users\\jhaan',
    shell: null
  } */

//Returns the Sysytem Uptime  in seconds
console.log(` System Uptime : ${os.uptime()} seconds  `);


const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(currentOs);



console.log(os.freemem());// Returns the amount of free system memory in bytes as an integer.

console.log(os.homedir());// Returns the string path of the current user's home directory.          ->    C:\Users\jhaan


console.log(os.hostname());// Returns the string path of the current user's home directory.        ->     Anuj-PC

console.log(os.platform());// Returns a string identifying the operating system platform for which the Node.js binary was compiled     ->     win32

console.log(os.release());// Returns the operating system as a string.    ->  10.0.22621
  




