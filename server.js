const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("<h1>Hello, this is Anil Sidhu</h1>");
    resp.write("<h1>Hello, this is Anil Sidhu 2</h1>");
    resp.end("Hello"); // Ends the response
  })
  .listen(4800);
