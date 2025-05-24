const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//this -> keyword is used to access current context when this is used in obj

// user.welcomeMessage()
// user.username = "sam"//context is change.
// user.welcomeMessage()



/* USING This ALONE(Global Context) :- 
    => When used alone in JavaScript, outside of any specific context, the behavior of the this keyword 
       depends on whether the code is running in strict mode or not.
*/
// console.log(this);//O/P :-  empty object({}).
/* NOTE :- In node environment when this keyword is used OUTSIDE to access current context which is global then it shows empyt obj {}, 
            while in browser same console.log(this) shows windows obj. */



/* USING THIS IN A FUNCTION :-
    =>  In a JavaScript function, the behavior of the this keyword varies depending on how the function is invoked.  
*/

// function chai(){
//     console.log(this);
// }

// chai() //when chai() function is called then this calls the current context, in which many bla bla thing stored.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai() //O/P :- undefined(in all 3 ways of DECLARATION) //now, when chai() function is called then this does not shows the current context , it means it only show current context when used in object not in function.



/* THREE WAYS OF DECLARING FUNCTION :- */
// 1) :-
// function chai() {
//     let username = "hitesh"
//     console.log(this.username);  //O/P :- undefined
//     console.log(this);           //O/P :- bla bla
// }

// 2) :-
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  //O/P :- undefined
//     console.log(this);           //O/P :- bla bla
// }

// 3) Arrow function :- 
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username); //O/P :- undefined
//     console.log(this);          //O/P :- empty object {}
// }

chai()



/* EXPLICIT RETURN -> mean ke agar {} braces laga diya toh return likhna parega */
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/* IMPLICIT RETURN -> means {} braces aur return hata do , aur jo return karana hai woh sidha likh do */
// const addTwo = (num1, num2) =>  num1 + num2

/* IMPLICIT RETURN -> means () parentheses laga diya toh return nhi likhna */
// const addTwo = (num1, num2) => ( num1 + num2 )



//const addTwo = (num1, num2) => {username: "hitesh"}   //gives error
//const addTwo = (num1, num2) => ({username: "hitesh"}) //this is the correct way of returning an object implicitly through an arrow function.

// console.log(addTwo(3, 4))