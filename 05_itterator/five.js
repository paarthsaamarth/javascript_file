const coding = ["js", "ruby", "java", "python", "cpp"]

/*forEach loop takes callback function as a parameter , and that callback function(no name of function) itterates
 over the array , and the argument of tha call back function can be value of array, index of the array and the 
 array whole itself*/
// coding.forEach( function (val){
//     console.log(val);
// } )


//arrow function as a callback function parameter forEach loop
// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

//u can directly give reference of the function as a parameter in forEach loop without executing it in.
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

//This way u can itterate of an array of object and can access the value of object which is also a value in array.
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )