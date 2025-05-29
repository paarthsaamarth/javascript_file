const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//objects are itterable through for in loop
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

//for in loop gives key i.e. index not the value while for of loop when itterated over same array gives value
for (const key in programming) {
    //console.log(programming[key]);//wanted to access value through for in loop on array
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

//maps are not itterable, can't do just like this
// for (const key in map) {
//     console.log(key);
// }