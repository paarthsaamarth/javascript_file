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

let userTwo = userOne //userTwo got the reference of userOne not the copy of userOne

userTwo.email = "nikhilbhaskar20@gmail.com" //this changes will also reflect in the email of userOne because both userOne && userTwo has the same reference of the object(containing email and upi)

console.log(userOne.email);//nikhilbhaskar20@gmail.com  NOT  benoverse11@gmail.com
console.log(userTwo.email);//nikhilbhaskar20@gmail.com

