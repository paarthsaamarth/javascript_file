// Array

//ways of declaring an array.
const myArr = [0, 1, 2, 3, 4, 5]          
const myHeors = ["shaktiman", "naagraj"]   
const mixed = [0,"shaktiman",bool]//javascript arrays are resizeable and can contain a mix of different data types.

//JavaScript Array copy operations create shallow copies.
//Shallow copy:- a shallow copy of an object is a copy whose properties share the same references.
//Deep copy:- a deep of an object is a copy whose properties do not share the same references.

//another way of declaring an array.
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);



// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()//remove elements from the back.

myArr.unshift(9)//add element from front -> but costly
myArr.shift()//remove elements from front.

console.log(myArr.includes(9));//boolean output
console.log(myArr.indexOf(3));//gives -1 O/P if particular element's index u want to find out which is not in array.

const newArr = myArr.join()//.join() converts all elements of the array into a single string. By default, it separates the elements with commas (",") unless you provide a different separator.

console.log(myArr);// O/P :- [1,2,3,4,5]
console.log(newArr);// O/P :- 1,2,3,4,5 also typeof(newArr) is string.



// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


/* Difference between slice() and splice() */

/*
🔹 slice() – Non-destructive, returns a copy

    * Purpose: Extracts a portion of an array without changing the original array.

    * Syntax: array.slice(start, end)

        * start: index to begin slicing (inclusive)

        * end: index to end slicing (exclusive)

    * Returns: A new array containing the selected elements.

    ✅ Does NOT modify the original array.
*/

/*
🔸 splice() – Destructive, modifies the array

    * Purpose: Changes an array by removing, replacing, or adding elements.

    * Syntax: array.splice(start, deleteCount, item1, item2, ...)

        * start: index to begin changes

        * deleteCount: number of elements to remove

        * item1, item2, ...: elements to insert (optional)

    * Returns: An array of removed elements.

    * ⚠️ Modifies the original array.

    e.g.    const arr = [10, 20, 30, 40, 50];
            const removed = arr.splice(1, 2, 99, 100); 
            // removes 2(deleteCount) elements at index 1 → [20, 30](elements to be deleted).
            // inserts(items) 99, 100 at that position
            console.log(removed); // [20, 30]
            console.log(arr);     // [10, 99, 100, 40, 50]
*/