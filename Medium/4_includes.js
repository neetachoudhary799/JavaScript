//includes() is used to check whether a value exists in an array or string.

//Returns true → if found
//Returns false → if not

//Example with String
let str = "Hello, world!";
console.log(str.includes("world")); // Output: true
console.log(str.includes("JavaScript")); // Output: false
console.log(str.includes("WORLD")); // Output: false Note: includes() is case-sensitive when used with strings.

//Example with Array
let arr = [10, 20, 30, 40, 50];
console.log(arr.includes(30)); // Output: true
console.log(arr.includes(60)); // Output: false

//Using Start Index
let array = [1, 2, 3, 2];
console.log(array.includes(2, 2)); // true
