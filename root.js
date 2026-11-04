const http = require("http");
const userForm = require("./userForm");

http
  .createServer((req, resp) => {
    if (req.url === "/" && req.method === "GET") {
      userForm(req, resp);
    } else if (req.url === "/submit" && req.method === "POST") {
      resp.writeHead(200, {
        "Content-Type": "text/html",
      });

      resp.end("<h1>Form Submitted</h1>");
    } else {
      resp.writeHead(404, {
        "Content-Type": "text/html",
      });

      resp.end("<h1>Page Not Found</h1>");
    }
  })
  .listen(4800, () => {
    console.log("Server running at http://localhost:4800");
  });
