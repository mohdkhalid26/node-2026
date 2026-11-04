const fs = require("fs");
const operation = process.argv[2];

// fs.writeFileSync("text/apple.txt", "This is fruit");
// fs.writeFileSync("text/banana.txt", "This is fruit");

// fs.unlinkSync("text/banana.txt");

// const data = fs.readFileSync("text/apple.txt", "utf-8");
// console.log(data);

// fs.appendFileSync("text/apple.txt", " and this is good for health");

if (operation === "write") {
  const name = process.argv[3];
  const content = process.argv[4];
  fs.writeFileSync(`text/${name}.txt`, content);
  console.log("File Created");
} else if (operation === "read") {
  const name = process.argv[3];
  const data = fs.readFileSync(`text/${name}.txt`, "utf-8");
  console.log(data);
} else if (operation === "update") {
  const name = process.argv[3];
  const content = process.argv[4];
  fs.appendFileSync(`text/${name}.txt`, content);
} else if (operation === "delete") {
  const name = process.argv[3];
  fs.unlinkSync(`text/${name}.txt`);
} else {
  console.log("Operation not found");
}

// compile and run the code using the following commands:
// 1. To create a new file:
//    ```
//    node fsCrud.js write filename "This is the content of the file"
//    ```

// 2. To read an existing file:
//    ```
//    node fsCrud.js read filename
//    ```

// 3. To update an existing file by appending content:
//    ```
//    node fsCrud.js update filename "This is additional content" // sometimes it want single quotes for the content, so if you get an error, try using single quotes instead of double quotes
//    ```

// 4. To delete an existing file:
//    ```
//    node fsCrud.js delete filename
//    ```
