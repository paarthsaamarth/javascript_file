const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)//.concat() -> used to merge two arrays
console.log(allHeros);

//used to spread all values --> generally preferred over concat(),because more than one values can be put 
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros); 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//.flat() -> in parentheses we put depth , up to which u wanted to flaten up
console.log(real_another_array);



//used most the time during data scaping
console.log(Array.isArray("Hitesh"))//check if whatever insider () is array or not?.
console.log(Array.from("Hitesh"))//.from() :- Creates a new Array instance from an iterable or array-like object.
console.log(Array.from({name: "hitesh"})) // interesting because O/P:- [] -> empty array , because object ke case mein array ko batana parega ki kiska array banana chahte hai, keys ka ya value ka, agar mentioned nhi kiya hai esliye empty array de rha hai.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.