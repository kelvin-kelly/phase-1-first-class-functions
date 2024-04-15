// helpers.js

// Function that receives a function as a parameter and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns the named function
  function returnsANamedFunction() {
    function namedFunction() {
      // The named function
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // This is an anonymous function
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  