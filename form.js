const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http
  .createServer((req, resp) => {
    if (req.url === "/" && req.method === "GET") {
      fs.readFile("html/form.html", "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(404, { "Content-Type": "text/plain" });
          return resp.end("File not found");
        }

        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.end(data);
      });
    } else if (req.url === "/submit" && req.method === "POST") {
      const dataBody = [];
      req.on("data", (chunk) => {
        dataBody.push(chunk);
      });

      req.on("end", () => {
        const rowData = Buffer.concat(dataBody).toString();
        console.log("Form Data:", rowData);

        const readableData = querystring.parse(rowData);
        console.log("Parsed Form Data:", readableData);

        const params = new URLSearchParams(rowData);
        const username = params.get("username");
        const email = params.get("email");
        console.log("Another Parsed Form Data:", { username, email });

        const userInfo = `Your username is ${username} and your email is ${email}.`;
        // fs.writeFileSync(
        //   "text/" + username + email + ".txt",
        //   userInfo,
        //   "utf-8",
        // );
        fs.writeFile(
          "text/" + username + email + ".txt",
          userInfo,
          "utf-8",
          (err) => {
            if (err) {
              resp.writeHead(500, { "Content-Type": "text/plain" });
              return resp.end("Error writing file");
            } else {
              console.log("File written successfully");
            }
          },
        );

        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.end("<h1>Form Submitted Successfully!</h1>");
      });
    } else {
      resp.writeHead(404, { "Content-Type": "text/plain" });
      resp.end("Page not found");
    }
  })
  .listen(3400, () => {
    console.log("Server running at http://localhost:3400");
  });
