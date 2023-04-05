
/* SYNC FS Module  */


/* const { readFileSync , writeFileSync} = require('fs')

console.log('Start')

const first = readFileSync( './FileReadWrite/first.txt' , 'utf8')
const second = readFileSync( './FileReadWrite/second.txt' , 'utf8')

writeFileSync(
    './FileReadWrite/Result-Sync-VS-Async.txt',
    ` Here is the result :
    ${first} 
    ${second} `,
    {flag : 'a'}
)

console.log("Done with The TASK ")
console.log(" Starting the NEXT one ") */
/* Start
Done with The TASK 
Starting the NEXT one
*/


/* ASYNC FS Module  */


const fs = require('fs');



const { readFile, writeFile } = require('fs');

console.log('START')
readFile(
    './FileReadWrite/FSM-Async/FirstFileSystemTestAsync.txt', 'utf8',
    (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const first = result;
        readFile(
            './FileReadWrite/FSM-Async/SecondFileSystemTestAsync.txt', 'utf8',
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                const second = result;
                writeFile(
                    './FileReadWrite/FSM-Async/CreatedByWriteFileAsync.txt', `Here is the Result:${first} , ${second} `, (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        console.log('Done With This Task ');
                    }
                )
            })
    })

console.log("Starting NEXT task ")
    /* START
Starting NEXT task 
Done With This Task  */