const http = require("http");
const fs = require("fs");

http
  .createServer((req, resp) => {
    fs.readFile("html/web.html", "utf-8", (err, data) => {
      if (err) {
        resp.writeHead(404, { "Content-Type": "text/html" });
        resp.write("<h1>File not found</h1>");
        resp.end();
      } else {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(data);
        resp.end();
      }
    });
  })
  .listen(3300);
