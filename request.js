const http = require("http");

http
  .createServer((req, resp) => {
    console.log(req.method);
    console.log(req.headers.host);
    console.log(req.url);
    // console.log(req.headers);
    // console.log(req);
    if (req.url === "/") {
      resp.write("<h1>Home</h1>");
      resp.end("Hello");
    } else if (req.url === "/about") {
      resp.write("<h1>About</h1>");
      resp.end("About");
    } else if (req.url === "/contact") {
      resp.write("<h1>Contact</h1>");
      resp.end("Contact");
    } else {
      resp.write("<h1>404 Not Found</h1>");
      resp.end("404 Not Found");
    }
  })
  .listen(5600);
