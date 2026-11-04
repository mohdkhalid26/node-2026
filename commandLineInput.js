const http = require("http");

const arg = process.argv;
const customPort = arg[2];

http
  .createServer((req, res) => {
    res.write("<h1>Hello World</h1>");
    res.end("<p>This is my first server</p>");
  })
  .listen(customPort || 3000);
