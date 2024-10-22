//Factorial

// // 1) Using For loop

// let n = Number(prompt("Enter the number for the factorial"))
// let result = 1;
// for (let i = n; i > 0; i--) {
//     result = result*i
// }
// console.log(result)
// alert(`The factorial of ${n} is: ${result}`)

// 2) Using reduce method

let n = Number(prompt("Enter the number for the factorial"))
let result = 1;

let arr = []

for (let i=n; i > 0 ; i--) {
    arr.push(i)
}
console.log(arr)
const fact = (a,b) =>{
    return a*b
}

alert(`The factorial of ${n} is ${arr.reduce(fact)} `)

// function red(n){}