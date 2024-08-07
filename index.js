// console.log('Node Js Project')
// console.log('First Project')
// console.log('Nodemon console')

// // process.exit(1) //or
// // process.exit = 1; //stop application programatically
// process.exit(0)

//Creating the server internally  in node.js

const http = require("http");
const fs = require("fs");
const url = require("url");

// create web server
//handler function to handle http requests and port number to listen server for upcoming request
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  // console.log('New Request Received.');
  // console.log(req);
  const log = `${Date.now()};${req.url}:  New Request\n`;
  const myurl = url.parse(req.url, true);
  console.log(myurl);
  fs.appendFile("log.txt", log, (error, data) => {
    // res.end('Hello from server!');
    // switch (req.url) {
    switch (myurl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myurl.query.name;
        res.end(`Hi, ${username}`);
        res.end("About Page");
        break;
      default:
        res.end("Page Not Found");
    }
  });
});

const port = 8000;
myServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
