console.log(2 > 1);  // --> comparison of same datatype
console.log(2 >= 1); 
console.log(2 < 1);  
console.log(2 == 1); 
console.log(2 != 1); 

console.log("2" > 1); // --> not give predicted result or outputs on differet datatype comparison because conversion is done.
console.log("2" >= 1) 

console.log(null > 0);   
console.log(null >= 0);         
console.log(null == 0); 
/* The reality is that equality check == and comparisons < > <= >= work differently. 
   Comparison  converts null value to a number , treating it as 0. 
   that's why (2) null >= 0 is true and (1) null > 0 is false. while equality check == does not
   convert null to a number i.e. 0  */

console.log(undefined > 0);   // --> undefined returns false in all comparison cases
console.log(undefined >= 0);  
console.log(undefined == 0);  

// ===(strict check)      --> it not only compare numbers on it's both side but also compare datatype of numbers
console.log("2" === 2); //false
// but
console.log("2" == 2); // true because double equalto not triple equalto
