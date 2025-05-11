let score = "nikhil"

console.log(typeof score); // one way of using typeof 
console.log(typeof(score));// another way of using typeof using method

let numscore = Number(score) //conversion to any type either number,string or boolean done by first letter of type should be capital e.g. number type conversion -> Number() 
console.log(typeof numscore);

console.log(numscore);

/* NUMBER CONVERSION */
// let score = "33" string => After conversion to Number() => typeof(numscore) is number
// let score = "33asg" string => After conversion to Number() => typeof(numscore) is NaN(not a number) but type of NaN is number(little confusing).
// let score = true => After conversion to Number() => typeof(numscore) is 1 
// let score = false => After conversion to Number() => typeof(numscore) is 0 
// let score = null => After conversion to Number() => typeof(numscore) is 0
// let score = undefined => After conversion to Number() => typeof(numscore) is NaN


let some = 33

let newsome = Boolean(some)
console.log(newsome);

/* BOOLEAN CONVERSION */
// 1 => true
// 0 => false
// "" empty string => false 
// "nikhil" string OR non empty string --> Boolean Conversion is => true
// 33 => true
// conversion of both null and undefined to boolean is => false

let sing = 33

/* STRING CONVERSION */
let newsing = String(sing)
console.log(newsing);
console.log(typeof newsing);


// ******************************************operations***********************************************

let str1 = "nikhil"
let str2 = " bhaskar"
console.log(str1 + str2); //nikhil bhaskar

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