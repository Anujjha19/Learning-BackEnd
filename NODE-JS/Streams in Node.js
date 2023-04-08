/* const { writeFileSync } = require( 'fs');
for( let i=0 ; i<10000 ; i++){
    writeFileSync( './FileReadWrite/BIGstream.txt' , ` hello World ${i}\n ` , {flag : 'a'})
} */
// By default Size of Buffer is 64 Kb  and last Buffer is Remainder 

const { createReadStream } = require( 'fs' )
// const stream = createReadStream('./FileReadWrite/BIGstream.txt')
const stream = createReadStream('./FileReadWrite/BIGstream.txt',
{ 
    highWaterMark : 90000 ,
    encoding: 'utf-8'
}
)

stream.on( 'data' , ( result ) => {
console.log(result);
}) 

stream.on( 'error' , (err) => {
    console.log(err)
})

/* const { writeFileSync } = require( 'fs');
for( let i=0 ; i<100000 ; i++){
    writeFileSync( './FileReadWrite/BIG-stream.txt' , ` hello World ${i}\n ` , {flag : 'a'})
} 
  */




//Inthis way we r sending to large chunk of data , to fix it we use STREAM
var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {



        // const text = fs.readFileSync('./FileReadWrite/BIG-stream.txt' , 'utf-8')
        // res.end(text);

        const fileStream = fs.createReadStream('./FileReadWrite/BIG-stream.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res);

        })
        fileStream.on('error', (err) => {
            res.end(err);
        })


    })
    .listen(5000)

