// Any statement which assigns some value to some other variable is considered as an Expression
  // primary
    // this keyword
      // In the global execution context (outside of any function),
      // this refers to the global object whether in strict mode or not.
      console.log(this === window);

      // In the function context
      function thisInStrictMode() {
        'use strict'; // see strict mode
        return this;
      }

      function thisWithoutStrictMode() {
        return this;
      }
      
      console.log(`this will default to undefined in strict mode ${thisInStrictMode === window}`);
      console.log(`this will default to to the global object ${thisWithoutStrictMode === window}`);
      
      // Where a function uses the this keyword in its body,
      // its value can be bound to a particular object in 
      // the call using the call() or apply() methods which all functions inherit from
        //  The bind method
          // Calling f.bind(someObject) creates a new function with the same body and scope as f,
          // but where this occurs in the original function, 
          // in the new function it is permanently bound to the first argument of bind

        // Prototype chain
          // make all this inheritance possible

          // when we try to access a certain method, or perperty on an object:
            // JS will try to find that in the object it self and if it cannot found,
            // it will look in the object's prototype ob it's parent so it moves up in the
            // prototype chain, this continues until no more prototype to look at, which is null
            // null is the only one that has no prototype
            // there is final link in prototype chain return undefined

        // DOM event handler
          // this is set to the element the vent fired from

https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/