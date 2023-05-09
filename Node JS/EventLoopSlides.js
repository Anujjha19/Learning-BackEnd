
/*   EXAMPLE   1    */


const { readFile, read } = require('fs')
console.log( 'Started a FIRST Task ')

readFile('./FileReadWrite/first.txt' , 'utf8' , ( err , result ) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(result);
    console.log( 'Completed First Task ')
})
console.log(" Starting NEXT task ") 

            // OUTPUT :        Started a FIRST Task 
            //                 Starting NEXT task
            //                 File 1      -->     Seeing th Diff b/w sync fs vs async fs
            //                 Completed First Task




/*   EXAMPLE   2    */


console.log('first')   // starting Operating System Process
setTimeout(() => {
    console.log('second')
}, 0)
console.log('third')   //Completed and Exited Operating Sysytem Process

            // OUTPUT :        first
            //                 third
            //                 second



/*   EXAMPLE   3    */


setInterval( () => {
    console.log(' Hello World ')

}, 2000)
console.log( ' I will Run First ')

        // I will Run First 
        // Hello World 
        // Hello World  on every 2 Second   ...


/*   EXAMPLE   4    */


const http = require('http')
const server = http.createServer( ( req , res) => {
    console.log("Request Event ")
    res.end('Hello World')

})
server.listen( 5000 , () => {
    console.log( `Server is listening on port : 5000 `)
})

// Every Time we Refresh it prints [    Request Event ...   ]