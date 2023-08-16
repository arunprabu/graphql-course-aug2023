// this examples uses default path package 
const path = require('path'); // importing path package from nodejs

const fileName = __filename; // global object
console.log(fileName); // prints the file name with the whole directory

//let's find out the extension of this file
const extn = path.extname(fileName);
console.log('File Extension is: '+ extn);

// let's print only file name
const baseName = path.basename(fileName);
console.log('File Name is: ' + baseName); // prints only the file name with extn
