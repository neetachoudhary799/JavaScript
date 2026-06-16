//datatypes
// 1. Primitive Data Types
//primitive data types: string, number, boolean, null, undefined, symbol,bigint

//string
let name = "Neeta";
console.log(typeof name);

//number
let age = 25;
console.log(typeof age);

//boolean
let isStudent = true;
console.log(typeof isStudent);

//null
let emptyValue = null;
console.log(typeof emptyValue); //object (this is a known quirk in JavaScript)

//undefined
let notDefined;
console.log(typeof notDefined); //output: undefined

//symbol
let sym = Symbol("unique");
let sym2 = Symbol("unique");
console.log(sym === sym2); //output: false (each symbol is unique)
console.log(typeof sym); //output: symbol

//bigint
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue); //output: bigint


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