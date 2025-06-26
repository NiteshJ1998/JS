const add = (a) => (b) => (c) => a + b + c;

console.log(add(1)(2)(3));

// function inside a function is called currying in
//  js but unless the those argumnet
// is not passed function wiil not work
