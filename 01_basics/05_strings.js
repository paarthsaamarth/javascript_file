const str1 = "Nikhil"
const str2 = "Kumar"

// Traditional way to concatenate strings
console.log(str1 + str2 + "Bhaskar");

// New way to concatenate strings --> using Backticks(``)
console.log(`my first name is ${str1} , middle name is ${str2} and last name is bhaskar`); // --> String interpolation :- a programming technique that replaces placeholders in a string with their corresponding values. 

// New way to declare a String
const newString = new String('Paarth-Saamarth')

// console.log(newString[0]); // P
// console.log(newString.__proto__); // {} --> looks like empty object but it is not an empty object.

// console.log(newString.length);
// console.log(newString.toUpperCase());
// console.log(newString.charAt(4));
// console.log(newString.indexOf('S'));

const substring = newString.substring(1,5) // you can't give -ve index to substring, if give then it ignore it and start with 0th index
console.log(substring);

const slicestring = newString.slice(3,-8) // you can give -ve index to slice 
console.log(slicestring);

const wspacestring = "    jhakaas    "
console.log(wspacestring);
console.log(wspacestring.trim()); // remove whitespace from start and end of a string.

const url = 'http://nikhil.com/nikhil%20bhaskar'
console.log(url.replace('%20','-'));
console.log(url.includes('nikhil'));
console.log(url.includes('kumar'));

console.log(newString.split('a')); // display string to array by splitting them by a certain value present in the string
