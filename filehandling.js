const fs = require('fs');

// console.log(fs);

//sync ca//
// fs.writeFileSync('./test.txt','Hello World This is write file.');

//Async call
// fs.writeFile('./test.txt','Hello World This is write file!!!' , (error) => {} );



// Question 
// Diff
// Which one use

//Now how to read a file
// const read = fs.readFileSync('./contact.txt',"utf8");

// console.log(read);

//Async returns void --  for return we uses callback function

// fs.readFile('./contact.txt',"utf8", (error, result) => {
//     if(error){
//         console.log('Error:', error);
//     }else{
//         console.log(result);
//     }
// });

//Append file
// fs.appendFileSync('./test.txt', `${new Date().getDate().toLocaleString()}\n`);
// fs.appendFileSync('./test.txt', `${Date.now()}\n`);

//copy file
// fs.copyFileSync('./test.txt', './copy.txt');

//delete file
// fs.unlinkSync('./copy.txt');


//get stats
// const stats = fs.statSync('./test.txt');
// const stats = fs.statSync('./test.txt').isFile();
// console.log(stats);

//make directory

fs.mkdirSync('Docs/a/b', {recursive: true});