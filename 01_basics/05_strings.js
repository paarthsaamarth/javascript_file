const str1 = "Nikhil"
const str2 = "Kumar"

// Traditional way to concatenate strings
console.log(str1 + str2 + "Bhaskar");

// New way to concatenate strings --> using Backticks(``)
console.log(`my first name is ${str1} , middle name is ${str2} and last name is bhaskar`); // --> String interpolation :- a programming technique that replaces placeholders in a string with their corresponding values. 

// New way to declare a String
const newString = new String('Paarth-Saamarth')

console.log(newString[0]); // P
console.log(newString.__proto__); // {} --> looks like empty object but it is not an empty object, but it contain many methods that u can easily see in console 

console.log(newString.length); //15
console.log(newString.toUpperCase()); //PAARTH-SAAMARTH
console.log(newString.charAt(4)); //t
console.log(newString.indexOf('S')); //7

const substring = newString.substring(1,5) // you can't give -ve index to substring, if give then it ignore it and start with 0th index also end part of parameter of substring is excluded.
console.log(substring);

const slicestring = newString.slice(3,-8) // you can give -ve index to slice 
console.log(slicestring);

const wspacestring = "    jhakaas    "  
console.log(wspacestring);
console.log(wspacestring.trim()); // remove whitespace from start and end of a string.

const url = 'http://nikhil.com/nikhil%20bhaskar'
console.log(url.replace('%20','-')); //replace ke andar do parameter -> 1) kya mai search karu , 2) aur kisse replace karu
console.log(url.includes('nikhil'));
console.log(url.includes('kumar'));

console.log(newString.split('a')); //display string to array by splitting them by a certain value present in the string
