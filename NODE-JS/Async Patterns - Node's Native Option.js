/* 
const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)




const start = async () => {
    try {
        const first = await readFilePromise('./FileReadWrite/first.txt' , 'utf8' )
        const second = await readFilePromise('./FileReadWrite/second.txt' , 'utf8' )
        await writeFilePromise('./FileReadWrite/result-mind-grenande.txt' , `Thats Awesome  ${first} , ${second} `)
        console.log(first);
        console.log(second);
    }
    catch (error) {
        console.log(error);
    }
}
start();
*/



const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./FileReadWrite/first.txt' , 'utf8' )
        const second = await readFile('./FileReadWrite/second.txt' , 'utf8' )
        await writeFile('./FileReadWrite/result-mind-grenande.txt' , `Thats Awesome  ${first} , ${second} ` , { flag : 'a'})
        console.log(first);
        console.log(second);
    }
    catch (error) {
        console.log(error);
    }
}
start();

