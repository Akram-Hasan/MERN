/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

console.log("Code of a faulty calculator");
let random = Math.random();

console.log(random);

if (random > 0.1) {
  console.log("True");
} else {
  console.log("False");
}

let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let c = prompt("Operation");
let result = 0;
// let obj = {
//     "+" : "-",
//     "*" : "+",
//     "-" : "/",
//     "/" : "**",
// }

if (random > 0.1) {
   
  if (c === "+") {
    result = a + b;
    alert("The Result is " + result);
  } else if (c === "-") {
    result = a - b;
    alert("The Result is " + result);
  } else if (c === "*") {
    result = a * b;
    alert("The Result is " + result);
  } else if (c === "/") {
    result = a / b;
    alert("The Result is " + result);
  }
} else {
  if (c === "+") {
    result = a - b;
    alert("The Result is " + result);
  } else if (c === "-") {
    result = a / b;
    alert("The Result is " + result);
  } else if (c === "*") {
    result = a + b;
    alert("The Result is " + result);
  } else if (c === "/") {
    result = a ** b;
    alert("The Result is " + result);
  }
}
