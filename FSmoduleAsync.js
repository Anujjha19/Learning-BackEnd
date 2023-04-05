

/* //FIle WE want to read , encoding , callback Function - 2 parameter ( err , data)
fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log(err, data);
})

console.log(" Finsihed Reading File ")


Becuase Call-back run after everything runs finally
Asynchronously reads the entire contents of a file.

OUTPUT  :-  Finsihed Reading File 
            null This is a Testing File  

 */



const fs = require('fs');



const { readFile, writeFile } = require('fs');

//Needs A CallBack  for Aync File Sysytem 
first = readFile(
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
                        console.log(result);
                    }
                )
            })
    })


/* 
        fs.writeFile('file2.txt', 'This is Done by Fs writeFile ', () => {
                console.log(" Written To The File ")
        });
        console.log(" Finished Reading File ")

        OUTPUT  :-      Finished Reading File 
                        Written To The File  
*/

