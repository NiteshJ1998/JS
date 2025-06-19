//Logical Operators

//AND ==> all conditions must be true.(&&)

const age = 19;
const gender = "male";

if (age >= 18 && gender == "male") {
  console.log("You are adult male");
}

//OR ==> At least one condition should be true. (||)

const age1 = 19;
const gender1 = "male";

if (age1 >= 18 && gender1 == "female") {
  console.log("You are adult male");
}

//NOT ==> True --> False & False --> True (!)

const number = 5;

if (!(number % 2 != 0)) {
  console.log("Odd");
}
