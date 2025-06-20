const currency = ["Indian rupees", "doller", "Euro"];

// above array can be access using simple for loop

// for (let i = 0; i < currency.length; i++) {
//   console.log(currency[i]);
// }

// for accessing the above array element we use forEach()

currency.forEach((val) => console.log(val)); // forEach() doesnot return
// new array

currency.map((val) => console.log(val)); // using map it return new
// array

// To find array element which we want to find we use find() functions

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let ans = numbers.find((num) => num === 3);

// console.log(ans);

// ============================================================

// Filter
// let say we want to find even number on list of array

const even = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10];

const newArr = even.filter((num) => num % 2 == 0);

console.log(newArr);
