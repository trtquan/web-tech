// JavaScript is a loosely typed or a dynamic language. Variables in JavaScript are not directly
//  associated with any particular value type,
// and any variable can be assigned (and re-assigned) values of all types:
let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string 
foo = true; // foo is now a boolean

// Six data types that are primitives: primitive just mean that these are not object
typeof 'John';             // Returns "string"
typeof 3.14;               // Returns "number" number always have decimal
typeof true;               // Returns "boolean"
typeof false;              // Returns "boolean"
typeof x;                  // Returns "undefined" (if x has no value)

typeof { name: 'John', age: 34 }; // Returns "object"
typeof [1, 2, 3, 4];              // Returns "object" (not "array", see note below)
typeof null;                      // Returns "object"
typeof function myFunc() {};      // Returns "function"

// JS converts numeric to strings with + operator

// An alternative method of retrieving a number from a string with + opreator
(+'1.2');


// Undefined 
    // the special value thay JS will set for the variable hasn't been set value
    // undefined isn't event an object

