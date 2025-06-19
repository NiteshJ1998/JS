//Functions

function sayHello() {
  console.log("Hello Nitesh");
}

//           argument
function add(num1, num2) {
  //   console.log(num1 + num2);
}

add(3, 2); // parameters
add(42, 22);

function multiply(num1, num2) {
  //   console.log(num1 * num2);
}

multiply(2, 4);

// return statment
function addition(a, b) {
  return a + b;
}

let a = addition(9, 1);
// console.log("hey user result is", a);

function addNumbers() {
  let ans = 0;

  for (let i = 0; i < arguments.length; i++) {
    ans = ans + arguments[i];
  }
  return ans;
}

let result = addNumbers(1, 2, 3, 4, 5);
console.log(result);
