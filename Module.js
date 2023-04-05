//Modules

// const {raj , avi } = require('./Test')
const names = require('./Test')
const sayHi = require('./Example')


//Alternate Wayy
const data = require('./ModuleAlternative');
//require('./MindGrenade')

console.log(data)
sayHi('Anuj');
sayHi(names.raj);
sayHi(names.avi); 

console.log(names)
