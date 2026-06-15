//datatypes
// 1. Primitive Data Types
// 1.1 Number
let num = 42; // Integer
let floatNum = 3.14; // Floating-point number
console.log(typeof num); // Output: "number"
console.log(typeof floatNum); // Output: "number"

// 1.2 String
let str = "Hello, World!";
console.log(typeof str); // Output: "string"

// 1.3 Boolean
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue); // Output: "boolean"

// 1.4 Undefined
let undefinedVar;
console.log(typeof undefinedVar); // Output: "undefined"

// 1.5 Null
let nullVar = null;
console.log(typeof nullVar); // Output: "object" (this is a known quirk in JavaScript)


// 2. Non-Primitive Data Types
// 2.1 Object
let obj = {
    name: "Neeta Rani",
    age: 25
};
console.log(typeof obj); // Output: "object"

// 2.2 Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // Output: "object" (arrays are a type of object in JavaScript)

// 2.3 Function
function greet() {  
    console.log("Hello!");
}
greet(); // Output: "Hello!"
console.log(typeof greet); // Output: "function"