// const score = 400
// console.log(score);//js automatically detect it's type as Number

// const balance = new Number(100)//But here u can explicitly define type -> Number by writing like this
// console.log(balance);//[Number: 100] --> it shows that is specially cast it in Number type , so this is the difference between automatically detect type and ecplicitly define type, when u say new object mein define kar raha hun jiska Number type hai.

// console.log(balance.toString().length);//convert balance into string when u see typeOf of this, so now u can also apply methods of strings, as it is string now.
// console.log(balance.toFixed(1)); //100.0 --> used to set no of digit after decimal place, sometimes precisions are so large that u need not to show to the client in that case u can fixed the precision using this method.

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));/*123.9 (it round of the value up to the given value of precision from start , suppose in this e.g. if value of precision is 3 then it round off 3 places from start i.e. --> 124) --> Number of significant digits. Must be in the range 1 - 21, inclusive.
// Returns a STRING containing a number represented either in exponential or fixed-point notation with a specified number of digits. */

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000 --> it is harder to see how many zeroes are there in code, so we convert them using this, by default it convert in US standards , we can change it by placing 'en-IN' in toLocaleString().

// +++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));



console.log(Math.random());//Math.random() ki value hamesa 0 aur 1 ke beech mein hii aati hai.
console.log((Math.random()*10) + 1);/* *10 esliye kiya taaki ek digit decimal se pehle la sake e.g. BEFORE *10 -> 0.35353 AFTER *10 -> 3.5353 
                                        +1 esliye kiya kyunki kabhi kabhi Math.random()*10 karne pe bhi value kuch is tarah aati hai -> 0.35353 -> 0.3 + 1 -> 1.35353*/
console.log(Math.floor(Math.random()*10) + 1);//Math.floor() esliye takki round off kar sake aur decimal value hata sake

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//(max - min + 1) becuse max - min give the range in which we want and +1 we know to avoid that such case after that + min because min value should be equal to min i.e. 10 in this case