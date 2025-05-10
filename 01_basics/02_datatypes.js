"use strict"; /* treat all JS code as newer version => The purpose of "use strict" is to 
indicate that the code should be executed in "strict mode".With strict mode, you can not, 
for example, use undeclared variables. */

// alert( 2 + 3 ) //this will throw an error because we are using nodejs, not browser

let name = "nikhil" // string type data
let age = 21 // number data type
let isLoggedIn = true // boolean type data

// Primitive Data Types:-
// In JavaScript, a primitive value is a single value with no properties or methods.
// JavaScript has 7 primitive data types:-

// number => 2 to power 53(range of number)
// bigint
// string => ""
// boolean => true/false
// null => standalone value , representation of no value --> means khali hai.
// undefined => mean no value is defined or Assigned to a variable during declaration.
// symbol => unique


// object

console.log(typeof "Nikhil"); // string
console.log(typeof undefined); // undefined --> kyunki woh(undefined) ek type hai
console.log(typeof null); // object
