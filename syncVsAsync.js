const fs = require("fs");

// Synchronous file read
const dataSync = fs.readFileSync(
  "text/mohdkhalid211003mohdkhalid211003@gmail.com.txt",
  "utf8",
);
console.log("Synchronous read:", dataSync);

// Asynchronous file read
fs.readFile(
  "text/mohdkhalid211003mohdkhalid211003@gmail.com.txt",
  "utf8",
  (err, dataAsync) => {
    if (err) {
      console.error("Error reading file asynchronously:", err);
      return;
    }
    console.log("Asynchronous read:", dataAsync);
  },
);

console.log("This log appears before the asynchronous read completes.");
