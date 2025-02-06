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

