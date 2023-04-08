
/* // Printing Everything Line by Line here 
console.log(' First Task ')
console.time()
for(let i=0 ; i< 10000000 ; i++){
    const h3 = document.querySelector('h3')
    h3.textContent = 'Hey , everyone is waiting on Me '
}

console.timeEnd()
console.log('next Task ') 

*/

// Printing Asynchronously 
console.log(' First Task ')

setTimeout(() => {
    console.log('Secod Task Inside SetTimeOut ')
})

console.log('next Task ')
/*  
First Task 
next Task 
Secod Task Inside SetTimeOut  */