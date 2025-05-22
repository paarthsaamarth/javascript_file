//const tinderUser = new Object()
const tinderUser = {}
/* The only difference between these two above object declaration is that one is singleton while other isn't. */

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //accessing nested properties

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


//array of objects -> mostly used when data comes from database.
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//O/P ka datatype Array hai
// console.log(Object.values(tinderUser));//O/P ka datatype Array hai
// console.log(Object.entries(tinderUser));//O/P -> har ek key value ko ek array mein convert kiya jaata , fir un sabki array of key value pair ka bhi array bana ke output mein show hota hai


//sometimes looping through object and you try to access one of the property of object which do not exist , can cause crash.
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//esliye check kar lo ki woh property us object mein hai bhi ki nhi.



/******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


//Destructuring the object.
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //this is the way of destructuring, and now it is no need to course.courseInstructor just write simply courseInstructor in console log , you can also change name of courseInstructor to some short name in destructuring process by writting original name in curly braces followed by : and : followed by new short name i.e. in this case {courseInstructor : instructor}

// console.log(courseInstructor);
console.log(instructor);
//same result from just above both two consoles



//this is how json looks --> what is json? --> api kya hai jo value aati hai backend se via API, pehle woh values XML(eXtensible Markup Language) format mein aati thi , lekin ab JSON(JavaScript object notation) format mein aati hai.
//it looks like an object which has not any name and the key value both are in string format("").
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//jaruri nhi hai hamesa hame value JSON mein hi mile, kabhi kabar woh array ke format mein bhi milti hai jiske andar dher saare objects hote hai.
[
    {},
    {},
    {}
]
