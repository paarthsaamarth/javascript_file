/* Data Type 
    => Two types :- 
        1) Primitive
        2) Non primitive
    
    Difference between these two types :-
        => ye differece iss tarah se kiya gaya hai ki ye data memory mein kaise store hai aur unko kis 
            tarah access kiya ja sakta hai --> esi ke basis pe officialy do categorization kiya gaya hai.
*/

// 1) Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol(kisi bhi value ko unique banane ke liye use kiya jaata hai), BigInt => [All are call by value]

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false --> because doesn't matter if value is same symbol make them unique

const bigNumber = 3456543576654356754n



// 2) Reference (Non primitive) --> all non-primitive datatype returns object when used with typeof but funcion returns function which in deep return object function

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //type of Reference type datatype return object expect for funtion whose return type is objectfunction
/*
Type of val	                                            Result

Undefined	                                            "undefined"
Null	                                                "object"
Boolean	                                                "boolean"
Number	                                                "number"
String	                                                "string"
Object (native and does not implement [[Call]])	        "object"
Object (native or host and does implement [[Call]])	    "function"
Object (host and does not implement [[Call]])	         Implementation-defined except may not be "undefined", "boolean", "number", or "string".
*/

// https://262.ecma-international.org/5.1/#sec-11.4.3