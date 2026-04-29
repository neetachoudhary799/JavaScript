//Flattening a nested array means converting it into a single-level array.
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. By passing Infinity as the depth, we ensure that all levels of nesting are flattened.
//Syntax: array.flat(depth)
//flat(depth) controls how deep to flatten
//flat(1) → one level
//flat(Infinity) → completely flat  
//Example
let nestedArray = [1, [2, 3], [4, [5, 6]], 7];

//flat(Infinity) → completely flat  
let flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]

//flat(1) → one level
let onelevel = nestedArray.flat(1);
console.log(onelevel); // Output: [1, 2, 3, 4, [5, 6], 7]

////flat(depth)
let depth = nestedArray.flat(2);
console.log(depth); // Output: [1, 2, 3, 4, 5, 6, 7]
