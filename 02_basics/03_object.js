// singleton
/* Object.creation -> two ways
    1) constructor
    2) literals

    Difference bwn these two is of singleton object creatino during constructor only not in literals
*/

// object.create -> this is called constructor method in which singleton banta hai

// object literals


//symbol declaration
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",//by default js takes name key as a string firr chahe aap uski value mein kuch bhi de
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //way of using symbol as a key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//ways of accesing properties of object
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]) //if key are declared like "full name" and not like full name then you can not access full name with . operation , it is mandatory to use [] notation to access "full name" key like this -> nameOfObject["nameOfKey"]
console.log(JsUser[mySym])//way of accessing the symbol key


//way of changing values of object
JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser) //after doing this no changes in your object can be done or reflect
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);


//inserting function in object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());