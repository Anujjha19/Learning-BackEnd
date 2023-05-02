/* 
FS  module has both synchronous (fs.Sync) and asynchronous (fs) versions of each method.

As their names suggest, synchronous methods block the execution of code until that method completes, while asynchronous methods allow other parts of the program to run while they execute.

For instance, the fs.readFileSync() method is a synchronous method that reads a file and returns its contents. This method blocks further execution until the file has been completely read into memory. It's worth noting that if you use synchronous methods frequently or for large files, it can negatively impact the performance and responsiveness of your application.

On the other hand, fs.readFile() is an asynchronous method that reads a file without blocking the program's flow. Instead, when the file has been read, the callback function passed as an argument is called. This approach allows other parts of the program to continue executing while the I/O operation is happening in the background. Using asynchronous methods can improve the responsiveness and overall performance of your application.
*/






/* //To Intentionally want Nodejs to Block  the file to execute line by line we can use bellow implementation

            const a = fs.readFileSync('file.txt');
            ->     TO see the Content we need to use to.String Method  or utf8
            console.log(a.toString());
            console.log(" Finsihed Reading File ") //Returns the contents of the path.
                    OUTPUT  :-  This is a Testing File 
                                Finsihed Reading File 
*/

// const fs = require('fs')
// fs.readFileSync
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync(
    './FileReadWrite/FSM-Sync/FirstFileSystemTest.txt',
    'utf8'
)

const second = readFileSync(
    './FileReadWrite/FSM-Sync/SecondFileSystemTest.txt',
    'utf8'
)









/* If Not File then create and Content , Else if File Already then OverWrite all the Content  */
writeFileSync('./FileReadWrite/FSM-Sync/CreatedByWriteFileSync.txt', `Here is the Result :${first} , ${second} `, { flag: 'a' })

console.log(first, second)

/*
        let data = 'This is Done by Fs writeFile Sync ';
        const b = fs.writeFileSync('file2.txt', data);
        console.log(b);
        console.log(" Finished Reading File ")

        OUTPUT  :-    Finished Reading File
        {This is Done by Fs writeFile Sync } - This will get Modified to file2
        
*/

/* 

The writeFileSync method in Node.js is used to write data to a file synchronously, which means that the program will not move on to the next line of code until the write operation is complete. 
The { flag: 'a' } option can be used to append data to an existing file instead of overwriting it.

Here is an example of using writeFileSync with the { flag: 'a' } option to append data to a file:

const fs = require('fs');

->     data to append to the file
const newData = 'This is some new data!';

->     append the data to an existing file
fs.writeFileSync('./path/to/file.txt', newData, { flag: 'a' });

console.log('Data appended to file!');
In this example, the data in the newData variable will be written to the file located at './path/to/file.txt', and the { flag: 'a' } option tells Node.js to append the data to the end of the file instead of overwriting it

*/

