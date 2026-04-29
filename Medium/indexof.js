//indexOf() is used to find the position of an element in an array or string. 
//start index is 0
//If found → returns index (0, 1, 2…)
//If NOT found → returns -1

//Example with String
let str = "Hello, world!";
console.log(str.indexOf("world")); // Output: 7
console.log(str.indexOf("JavaScript")); // Output: -1
console.log(str.indexOf("WORLD")); // Output: -1 Note: indexOf() is case-sensitive when used with strings.

//Example with Array
let arr = [10, 20, 30, 40, 50];
console.log(arr.indexOf(30)); // Output: 2
console.log(arr.indexOf(60)); // Output: -1

//Example with String and starting index
let str2 = "JavaScript is great, and JavaScript is fun!";
console.log(str2.indexOf("JavaScript")); // Output: 0 (first occurrence)
console.log(str2.indexOf("JavaScript", 10)); // Output: 25 (second occurrence)  

//Example with Array and starting index
let arr2 = [1, 2, 3, 4, 5, 2, 3];
console.log(arr2.indexOf(2)); // Output: 1 (first occurrence)
console.log(arr2.indexOf(2, 2)); // Output: 5 (second occurrence)

//Find duplicate using indexOf()
let arr = [1, 2, 3, 2];
let duplicates = arr.filter((item, index) => {
  return arr.indexOf(item) !== index;
});
console.log(duplicates); // [2]


