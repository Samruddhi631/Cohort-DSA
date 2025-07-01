
// swap two number using bitwise operator
//  a=10,b=8;
//  a=a^b;
//  b=a^b;
//  a=a^b;
//  console.log(a,b)

// check if the number is even or odd

// let prompt=require("prompt-sync")()
// let n=Number(prompt("Enter a number "))
// console.log((n&1)==0 ? "even" :" odd")

// check if the number  is power of 2

let prompt=require("prompt-sync")()
let n=Number(prompt("Enter a number "))
console.log((n&(n-1))==0 ? "yes" :" no")

