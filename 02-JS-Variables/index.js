//variables
// var | let | const

//var ==> Global
// Re-assign
// Anytime we can access this var variable

//let - Local
//Re- assign
// Acess only on block scope

//const - Local
// can't be re- assign
// Acess only on block scope

// DataType varName = value; Strongly Typed language
//JS - loosly type language

var age = 21;
var num1 = 20;
var num2 = 32;

console.log(num1 + num2);

// var --> Global Scope

if (true) {
  var age = 23;
}

console.log(age);

// let --> Local scope and

if (true) {
  let a = 20;
}

console.log(a);

// it will thrown an error a is not defined

// this is also loosly type variable

let a = 10;

a = "nitesh";

console.log(a);

//const
// Scope --> Local
// once the const value is defined this can't changed

const age = 22;

age = 30;

console.log(age);

// Uncaught TypeError: Assingment to constant variable
