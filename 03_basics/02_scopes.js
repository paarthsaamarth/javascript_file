
/* NOTE :- The global scope in JavaScript differs between browser and Node.js environments. */

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


addone(5) //-> this does not give error and successfully run 

function addone(num){
    return num + 1
}



addTwo(5) // -> while this gives error because can not access 'addTwo' before intialization.
const addTwo = function(num){
    return num + 2
}

//simply how you declare function , that depend on whether error comes or not while accessing first before intialization.


/*This is know as hoisting 

In the context of JavaScript, "hoisting" refers to a behavior where variable and function declarations
are moved to the top of their respective scopes during the compilation phase, before code execution. 

*/