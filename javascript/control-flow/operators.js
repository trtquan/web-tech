// An assignment operator assigns a value to its left operand based on the value of its
  // right operand (=) 
  const a = 4 

// Destructuring 
  // that makes it possible to extract data from arrays or objects using a syntax that mirrors 
  // the construction of array and object literals
  const foo = { prop1: 1, prop2: 2, prop3: 3 };

  // set default value
  const { prop = 3, prop2, prop3 } = foo;

// Arithmetic operators
  // + attempts to convert the operand to a number, if it is not already.
  const number3 = +'3';

// Comparison operators
  // === don't attempt to convert the operands to compatible types before checking equality
  // false && anything is short-circuit evaluated to false.
  // true || anything is short-circuit evaluated to true.

  // ternary operatorSection
  number3 > 3 ? 'greater'
    : number3 < 3 ? 'lower'
      : 'equal';

// Unary operatorsSection
  typeof number3;
  // void can be used to force the function keyword to be treated
  // as an expression instead of a declaration

// Relational operatorsSection

  // the in operator returns true if the specified property is in the specified object
  console.log(`PROP1 exited in foo ${'prop1' in foo}`);

  // The instanceof operator returns true if the specified object is of the specified object type. 
  const theDay = new Date(1995, 12, 17);
  console.log(`the Day is instanceof Date object ${theDay instanceof Date}`);
  