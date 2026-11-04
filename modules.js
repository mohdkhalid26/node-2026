const fs = require("fs");
const os = require("os"); // import os module

const { log } = require("console"); // import console module

fs.writeFileSync("dummy.txt", "trying with modules");
// Create a file with name and write content in it

console.log(os.platform()); // Print the platform of the OS
console.log(os.hostname()); // Print the hostname of the OS

log("custom log");
