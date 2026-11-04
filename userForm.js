const fs = require("fs");

function userForm(req, resp) {
  fs.readFile("html/form.html", "utf8", (err, data) => {
    if (err) {
      resp.writeHead(500, {
        "Content-Type": "text/html",
      });

      resp.end("<h1>Error: File Not Found</h1>");
      return;
    }

    resp.writeHead(200, {
      "Content-Type": "text/html",
    });

    resp.end(data);
  });
}

module.exports = userForm;
