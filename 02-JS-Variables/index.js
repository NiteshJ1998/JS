//variables
//var

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
