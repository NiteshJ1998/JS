// Arrow Functions

// 1 Syntax
const sayHello = () => {
  //   console.log("hey");
};

sayHello();

const add = (a, b) => {
  return a + b;
};

// console.log(add(2, 3));

// 2. Arguments
// Argument is not accessible on
// arrow function its only available on normal function
// that's the reason we have to use spread operator

const addNumbers = (...nums) => {
  //   console.log(nums);
};

addNumbers(10, 21, 23, 22);

// Hoisting

//Normal fucntion - where we are accessing the
// function before the initialization and it will give us the results

sayHey();
function sayHey() {
  //   console.log("heyy there");
}

/** But here in arrow function if try to access this function
 * this will throw an error saying - 
 * index.js:43 Uncaught ReferenceError: Cannot access 'sayHeyV2' before initialization
    at
 */
// sayHeyV2();

const sayHeyV2 = () => {
  //   console.log("heyy there V2");
};

//4. This keyword

const obj = {
  value: 20,
  myFunction: function () {
    console.log("obj vlaue is " + this.value);
  },
};

// obj.myFunction();

/*
in this keyword we are using this on normal function this will
point out to object and if we use this keyword on arrow function 
this will point out to window obj which global but its present 
on browser 
*/

const obj1 = {
  value: 10,
  myFunction1: () => {
    console.log(this);
  },
};

obj1.myFunction1();
