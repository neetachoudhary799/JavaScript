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


//indesxOf() vs includes() 
// both are used to check the presence of an element in an array or string, but they differ in their return values and behavior.
//indexOf() returns the index of the first occurrence of the specified value, while includes() returns a boolean indicating whether the specified value is found in the array or string. 
//indexOf() returns -1 if the value is not found, while includes() returns false.