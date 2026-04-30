//array methods
//1)toString()
//2)join()------Important--
//3)pop() 
//4)push()------Important--
//5)shift() → removes the first element from an array and returns it
//6)unshift() → adds one or more elements to the beginning of an array and returns the new length of the array
//7)concat() → merges two or more arrays and returns a new array
//8)slice() → returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
//9)splice() → changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//10)indexOf() → returns the first index at which a given element can be found in the array, or -1 if it is not present
//11)lastIndexOf() → returns the last index at which a given element can be found in the array, or -1 if it is not present
//12)forEach() → executes a provided function once for each array element
//13)map() → creates a new array populated with the results of calling a provided function on every element in the calling array
//14)filter() → creates a new array with all elements that pass the test implemented by the provided function
//15)reduce() → executes a reducer function on each element of the array, resulting in a single output value
//16)flat() → creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
//17)includes() → determines whether an array includes a certain value among its entries, returning true or false as appropriate
//18)find() → returns the value of the first element in the array that satisfies the provided testing function, or undefined if no such element is found
//19)findIndex() → returns the index of the first element in the array that satisfies the provided testing function, or -1 if no such element is found
//20)sort() → sorts the elements of an array in place and returns the sorted array
//21)reverse() → reverses the order of the elements of an array in place and returns the reversed array
//22)fill() → fills all the elements of an array from a start index to an end index with a static value
//23)copyWithin() → shallow copies part of an array to another location in the same array and returns it without modifying its length   
//24)entries() → returns a new Array Iterator object that contains the key/value pairs for each index in the array
//25)keys() → returns a new Array Iterator object that contains the keys for each index in the array
//26)values() → returns a new Array Iterator object that contains the values for each index in the array
//27)Array.isArray() → determines whether the passed value is an Array
//28)Array.from() → creates a new, shallow-copied Array instance from an array-like or iterable object
//29)Array.of() → creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments
//30)Array.prototype.toLocaleString() → returns a localized string representing the array and its elements
//31)Array.prototype.toString() → returns a string representing the specified array and its elements
//32)Array.prototype.valueOf() → returns the primitive value of the specified array
//33)Array.prototype[@@iterator]() → returns the default iterator for the array
//34)Array.prototype[@@unscopables] → an object whose own and inherited properties are property names that are excluded from the with environment bindings of the associated array
//35)Array.prototype[@@species] → a function value that is the constructor function that is used to create derived objects
//36)Array.prototype[@@toStringTag] → a string value used in the creation of the default string description of an object
//37)delete operator → used to remove an element from an array by index, but it does not change the length of the array and leaves a hole (undefined) in its place
//38)length property → represents the number of elements in an array, but it can be manually set to a different value, which can lead to unexpected behavior if not used carefully
//39)Array.prototype.length → returns the length of the array
//40)Array.prototype.constructor → returns the function that created the Array prototype object

//1)toString() → converts array to string
let arr = [1, 2, 3];
console.log(arr.toString()); // Output: "1,2,3"

//2)join() → joins array elements into a string with a specified separator
console.log(arr.join("-")); // Output: "1-2-3"


//3)pop() → removes the last element from an array and returns it
let lastElement = arr.pop();
console.log(lastElement); // Output: 3
console.log(arr); // Output: [1, 2]
