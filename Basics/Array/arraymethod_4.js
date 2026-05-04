//1)Array.isArray() → true,false
//2)Array.from() → converts a string to an array
//3)Array.of() → 
//4)Array.prototype.toLocaleString() → converts a array to an string
//5)Array.prototype.toString() → converts a array to an string
//6)Array.prototype.valueOf() → returns the primitive value of the specified array
//7)Array.prototype[@@iterator]() → returns the default iterator for the array
//8)Array.prototype[@@unscopables] → an object whose own and inherited properties are property names that are excluded from the with environment bindings of the associated array
//9)Array.prototype[@@species] → a function value that is the constructor function that is used to create derived objects
//10)Array.prototype[@@toStringTag] → a string value used in the creation of the default string description of an object
//11)Array.prototype.length → returns the length of the array
//12)Array.prototype.constructor → returns the function that created the Array prototype object

//1)Array.isArray() → determines whether the passed value is an Array
let arr13 = [1, 2, 3];
let string = "Hello, world!";
let obj = { name: "Alice", age: 30 };
console.log(Array.isArray(arr13)); // Output: true
console.log(Array.isArray(string)); // Output: false    
console.log(Array.isArray(obj)); // Output: false

//2)Array.from() → creates a new, shallow-copied Array instance from an array-like or iterable object
let str = "Hello";
let arrFromString = Array.from(str);
console.log(arrFromString); // Output: ["H", "e", "l", "l", "o"]

//3)Array.of() → creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments
let arrOf = Array.of(1, "hello", true);
console.log(arrOf); // Output: [1, "hello", true]

//4)Array.prototype.toLocaleString() → returns a localized string representing the array and its elements
let arr14 = [1, "hello", true];
console.log(arr14.toLocaleString()); // Output: "1,hello,true"

//5)Array.prototype.toString() → converts a array to an string
let arr15 = [1, "hello", true];
console.log(arr15.toString()); // Output: "1,hello,true"    

//6)Array.prototype.valueOf() → returns the primitive value of the specified array
let arr16 = [1, "hello", true];
console.log(arr16.valueOf()); // Output: [1, "hello", true] (the array itself is returned as the primitive value)       

//7)Array.prototype[@@iterator]() → returns the default iterator for the array
let arr17 = [1, 2, 3];
let iterator = arr17[Symbol.iterator]();
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }

//8)Array.prototype[@@unscopables] → an object whose own and inherited properties are property names that are excluded from the with environment bindings of the associated array
let arr18 = [1, 2, 3];
console.log(arr18[Symbol.unscopables]); // Output: { copyWithin: true, entries: true, fill: true, find: true, findIndex: true, flat: true, flatMap: true, includes: true, keys: true, values: true }        

//9)Array.prototype[@@species] → a function value that is the constructor function that is used to create derived objects
let arr19 = [1, 2, 3];
console.log(arr19[Symbol.species]); // Output: function Array() { [native code] }   

//10)Array.prototype[@@toStringTag] → a string value used in the creation of the default string description of an object
let arr20 = [1, 2, 3];
console.log(arr20[Symbol.toStringTag]); // Output: "Array"  


//11)Array.prototype.length → returns the length of the array
let arr21 = [1, 2, 3];
console.log(arr21.prototype.length); // Output: 3     

//12)Array.prototype.constructor → returns the function that created the Array prototype object
let arr22 = [1, 2, 3];
console.log(arr22.prototype.constructor); // Output: function Array() { [native code] }
