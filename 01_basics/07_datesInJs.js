// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString);
console.log(myDate.toJSON);
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString);
console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23);//month in js starts from 0.
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);//adding extra 5, 3 and so on goes in time 
// let myCreatedDate = new Date("2023-01-14");//another format of creating my own date AND month in this format starts with 1
// let myCreatedDate = new Date("01-14-2023");//another one(format)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now();

console.log(myTimeStamp);//in milisec(ms) from jan 1, 1970
console.log(myCreatedDate.getTime());//convert myCreatedDate to time in ms from january 1, 1970 
console.log(Math.floor(Date.now()/1000));//Date.now() -> gives date in milisec but Date.now()/1000 -> gives date in sec but one problem is it get date in decimal so inorder to remover decimal part we use Math.floor()

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//more customization
newDate.toLocaleString('default', {
    weekday: "long",
})