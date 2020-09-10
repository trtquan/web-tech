// The undefined value behaves as false when used in a boolean context
let a;
if (a === undefined) {
  console.log('a is undefined!');
} else {
  console.log(' a is defined!');
}
// Undefined convert to  NaN when used in numeric context
console.log(a + 2);

// Null   value behaves to 0 when used in numeric context
const n = null;
console.log(n + 2);


// Variable scope(where can i access a variable) 

// Hoisting execution context is created in 2 phases 
/** first phase is called the creation phase in that phase we have the global object
 * there's an outer enviroment that's created,
 * recognizes where you're created variables and where you're created functions
 * and setup memory space for variables and function "Hoisting"
 * the execution phase, all variables in JS are initially set to undefined
 * */
