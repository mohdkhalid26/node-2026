var a = 10; // function scope variable
let b = 20; // block scope variable
const c = 30;

a = 100;
b = 200;
// c = 300; // this will give an error because const value cannot be changed

console.log(a + b + c);

if (a == 200) {
  console.log("this is if condition");
} else {
  console.log("this is else condition");
}

function fruit(item) {
  console.log("fruit is " + item);
}

fruit("apple");
fruit("banana");

for (var a = 0; a <= 10; a++) {
  console.log(a);
}

var a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}

var user = ["anil", "sam", "peter", "bruce"];

for (var a = 0; a < user.length; a++) {
  console.log(user[a]);
}

var user = {
  name: "anil",
  city: "delhi",
  age: 29,
};

console.log(user.name);
console.log(user.city);
console.log(user.age);

const data = require("./data.js");

console.log(data.userName);
