// A closure is the combination of a function bundled
// together (enclosed) with references to its surrounding
//state (the lexical environment).

// In other words, a closure gives a function access to its
// outer scope. In JavaScript, closures are created every time
//  a function is created, at function creation time.

// function main() {
//   const name = "Nitesh";

//   function sayMyName() {
//     console.log(name);
//   }

//   return sayMyName();
// }

// let fn = main();

// fn();

//Another Example

// function adder(num){

//     function add(b){
//         console.log(num + b)
//     }

//     return add;
// }

// const addTo5 = adder(5)

// addTo5(2)

function adder(num) {
  function add(b) {
    console.log(num + b);
  }

  return add;
}

let addTo2 = adder(4);

addTo2(2);

// refer this link for more example
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
