// stack(primitive)  , heap(non-primitive)

let myName = "paarth"

let anotherName = myName
anotherName = "nikhil"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "benoverse11@gmail.com",
    upi : "2384892@ybl"
}

let userTwo = userOne

userTwo.email = "nikhilbhaskar20@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

