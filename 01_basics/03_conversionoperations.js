let score = "nikhil"

console.log(typeof score);
console.log(typeof(score));

let numscore = Number(score) //conversion to any type either number,string or boolean done by first letter of type should be capital e.g. number type conversion -> Number() 
console.log(typeof numscore);

console.log(numscore);

// "33" string to  => 33 number
// "33asg" string to => NaN(not a number) but type is number.
// true bool value to => 1 number and false bool value to => 0 number
// conversion of null to number is => object 
// conversion of undefined to number is => undefined


let some = 33

let newsome = Boolean(some)
console.log(newsome);

// "nikhil" string to and " " string to => true
// "" empty string to => false
// 33 => true
// conversion of both null and undefined to boolean is => false

let sing = 33

let newsing = String(sing)
console.log(newsing);
console.log(typeof newsing);


// ******************************************operations***********************************************

let str1 = "nikhil"
let str2 = "bhaskar"
console.log(str1 + str2);

console.log("1" + 2 ); // 12  => result depend on 1st operand type, if 1st operand str then take 2nd and so on operand as str and concatenate(+) them
console.log(1 + "2");  // 12  => here 1st operand is int then "2" is also taken as int despite 2 is written in ""
console.log("1" + 2 + 2); // 122 => here 1st operand is str then 2 + 2 both are taken as str despite now written in quotes("") as a result O/P comes as 122 on concatenation 
console.log(1 + 2 + "2"); // 32 => here 1st operand is int then 2 + "2" both are taken as int as a result O/P is 32 --> 3 in 32 comes from sum of 1 + 2 = 3 and 2 in 32 comes from concatenation of 3 + 2 = 32

console.log(true); // true
console.log(+true); // 1
//console.log(true+); --> ERROR

console.log(false); // false
console.log(+false) // 0
// console.log(false+); --> ERROR
console.log(+""); // 0