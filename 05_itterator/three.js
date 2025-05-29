// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
//This is how u set key,value pair in map in JS
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

//This is how u access key and value of map in JS
for (const [key, value] of map) {
    console.log(key,value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//This is not how object is itterable -> it gives error
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }