const age = 18;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

// Ternary Operator

const age1 = 19;

let result = age1 >= 18 ? "Yes" : "No";

console.log(result);

// Switch Case

const option = 1;

switch (option) {
  case 1:
    console.log("you pressed 1 ");
    break;
  case 2:
    console.log("you pressed 2");
    break;
  case 3:
    console.log("you pressed 3");
    break;
  default:
    console.log("Invalid option");
}
