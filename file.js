const fs = require('fs');
const os = require('os');

//Blocking
// console.log(`True value 1`);

// const syncOptions = fs.readFileSync('test.txt', 'utf8');
// console.log(syncOptions);

// console.log(`False Value 0`);

//Non-Blocking

// console.log(`True value 1`);

// fs.readFile('test.txt', 'utf8', (error,result) => {
//     console.log(result);
// });


// console.log(`False Value 0`);

//get your system details

console.log(`System Information: ${os.EOL}`);
console.log(`CPU Usage: ${os.loadavg()} ${os.EOL}`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`CPUs: ${os.cpus().length}`);