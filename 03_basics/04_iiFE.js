// Immediately Invoked Function Expressions (IIFE)

/*Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are 
defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.*/
//Avoid polluting the global namespace.
//IIFE is used to create private and  public variables and methods.
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')