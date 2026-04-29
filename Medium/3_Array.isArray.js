//Array.isArray() is used to check whether a value is an array or not. 
//Returns true → if value is an array
//Returns false → if not

//Example 1: Checking if a variable is an array
let arr = [1, 2,[4], 3];
let string = "Hello, world!";
let obj = { name: "Alice", age: 30 };
console.log(Array.isArray(arr)); // Output: true
console.log(Array.isArray(string)); // Output: false
console.log(Array.isArray(obj)); // Output: false
console.log(Array.isArray([])); // Output: true (empty array is still an array)
console.log(Array.isArray(obj.name)); // Output: false (a string is not an array)



//Real Use Case (Flatten example)
function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
console.log(flatten([1, [2, 3], [4, [5, 6]], 7])); // Output: [1, 2, 3, 4, 5, 6, 7]