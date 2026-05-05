//arrow function expression
//Arrow functions ES6 (ECMAScript 2015) and provide a shorter syntax
// such as not having their own 'this' context.
//no paratheseis
//no function keyword
//no return keyword for single expression


//When to Use
//✔ Array methods (map, filter, reduce)
//✔ Short functions
//✔ Functional programming

// ❌ Avoid in:
//Object methods
//Constructors

//Traditional function expression
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // Output: 5    

//1Arrow function expression {}
const addArrow = (a, b) => {
  return a + b;
};  
console.log(addArrow(2, 3)); // Output: 5

//2 Concise body syntax (implicit return)(no need return and curly braces.)
const addConcise = (a, b) => a + b;
console.log(addConcise(2, 3)); // Output: 5

//Arrow functions with a single parameter (parentheses can be omitted)
const square = x => x * x;
console.log(square(4)); // Output: 16

//Arrow functions with no parameters (use empty parentheses)
const greet = () => "Hello!";
console.log(greet()); // Output: "Hello!"

//Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding scope. This can be useful in certain situations, such as when working with callbacks or methods that need to access the parent object's properties.
const person = {
  name: "Alice",    
    greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}.`); // 'this' refers to the person object
    }, 1000);
  }         
};
person.greet(); // Output: "Hello, my name is Alice." (after 1 second)

//1. ❌ No this binding (Very Important)not defined function ().
const obj = {
  name: "Neeta",
  show: () => {
    console.log(this.name);
  }
};

obj.show(); // undefined ❌

//2. ❌ No arguments object
const test = () => {
  console.log(arguments); // ❌ Error
};

//3. ❌ Cannot be used as constructor
const Person = () => {};
new Person(); // ❌ Error


(() => {
    console.log("Arrow IIFE");
})();