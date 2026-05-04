//-----important--
//1)forEach() 
//2)of and in for loop  
//3)forloop  
//4)map() 
//5)filter() 
//6)reduce() 
//7)flat() 
//8)flatMap()
//9)sort() 

//1)forEach() → //do not return new array and we operate on each element push new value in new array
let arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
    console.log(element);
});

//2)of and in for loop  ---do not return new array and we operate on each element
let arr1 = [1, 2, 3, 4, 5];
for (let element of arr1) {
    console.log(element); // Output: 1 2 3 4 5 values
}
for (let i in arr1) {
    console.log(arr1[i]); // Output: 1 2 3 4 5 keys
}

//3)forloop----do not return new array and we operate on each element
let arr = [1, 2, 3, 4, 5];  
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//4)map() → return new array and we operate on each element and return new value
let arr2 = [1, 2, 3, 4, 5];
let squaredArr = arr2.map((num) => num * num);
console.log(squaredArr); // Output: [1, 4, 9, 16, 25]   

//5)filter() → return new array and we operate on each element and return true or false
let arr3 = [1, 2, 3, 4, 5];
let evenNumbers = arr3.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//6)reduce() → return single value and we operate on each element and return single value
let arr4 = [1, 2, 3, 4, 5];
let sum = arr4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 

//7)flat() → creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
let flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]  

//8)flatMap() → first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
let arr5 = [1, 2, 3];
let flatMappedArray = arr5.flatMap((num) => num * 2);
console.log(flatMappedArray); // Output: [2, 4, 6]

//9)sort() → sorts the elements of an array in place and returns the sorted array.
let arr5 = [5, 2, 9, 1, 5, 6];
arr5.sort((a, b) => a - b);  //ascending order(a-b) and descending order(b-a)
console.log(arr5); // Output: [1, 2, 5, 5, 6, 9]
