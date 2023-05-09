const path = require("path");

console.log(path.sep); //    ->     \

const filePath = path.join('/Built In Modules/', 'PM', 'TeestPM.txt')

console.log(filePath);  //  \Built In Modules\PM\TeestPM.txt

console.log(path.basename(filePath)) // TeestPM.txt
console.log(path.basename(filePath)) // TeestPM.txt

const absolutePath = path.resolve(__dirname, 'Built In Modules', 'PM', 'TeestPM.txt');
console.log(absolutePath)  //    -> d:\Learning  BackEnd\Built In Modules\PM\TeestPM.txt  



const a = path.basename('C:\\temp\\myfile.html'); // Return the last portion of a path
console.log(a)  //  myfile.html
const b = path.dirname('C:\\temp\\myfile.html'); // Return the directory name of a path.
console.log(b)   // C:\temp

const c = path.extname(__filename); // Return the directory name of a path.  -> .js
console.log(c)



/* 
    path.parse('C:\\path\\dir\\file.txt');
        Returns:
        { 
        root: 'C:\\',
        dir: 'C:\\path\\dir',
        base: 'file.txt',
        ext: '.txt',
        name: 'file' 
        }
 */


