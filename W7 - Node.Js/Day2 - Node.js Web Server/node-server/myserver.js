//Exercise 1 - http 

const http = require('http')
const { Http2ServerRequest } = require('http2')
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.end("<h1> This is my first response </h1> ")
    // response.send("<h1> This is my second response </h1> ") //this doesnt work
    // response.end("<h2> This is my third response </h2> ") //this doesnt work
    response.write(<h1> Ola</h1><H2>aloalo</H2>)

    //write, and then send
  

}
)
server.listen(3000)
console.log('dasdasda')

//Exercise 2 - http & json

// const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };

// https.createServer(options, function (req, res) {
//   res.writeHead(200);
//   res.end("hello world\n");
// }).listen(http://localhost:8080/);



//fetch data

