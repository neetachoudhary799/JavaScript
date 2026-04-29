//1)Function declartion
//Function hoisting is a JavaScript mechanism where function declarations are moved to the top of their containing scope during the compilation phase. This means that you can call a function before it is defined in the code, and it will still work without throwing an error.

sayHello(); // ✅ Works before 

function sayHello() {
  console.log("Hello");
}

sayHello(); // ✅ Works After  // Output: "Hello"

//2)Function expression
//In contrast to function declarations, function expressions are not hoisted. This means that if you try to call a function expression before it is defined, you will get an error.
sayGoodbye(); // ❌ Error: Cannot access 'sayGoodbye' before initialization

const sayGoodbye = function() {
  console.log("Goodbye");
};
sayGoodbye(); // ✅ After Works  // Output: "Goodbye"

//Arrow function expression
//Similar to function expressions, arrow functions are also not hoisted. Attempting to call an arrow function before it is defined will result in an error.

sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization       

const sayHi = () => {
  console.log("Hi");
};
sayHi(); // ✅ Works  // Output: "Hi"
