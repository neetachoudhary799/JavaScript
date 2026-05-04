//1)find() → returns the value of the first element in the array that satisfies the provided testing function, or undefined if no such element is found
//2)findIndex() → returns the index of the first element in the array that satisfies the provided testing function, or -1 if no such element is found
//3)indexOf() → returns the first index at which a given element can be found in the array, or -1 if it is not present
//4)lastIndexOf() → returns the last index at which a given element can be found in the array, or -1 if it is not present
//5)fill() → fills all the elements of an array from a start index to an end index with a static value
//6)copyWithin() → shallow copies part of an array to another location in the same array and returns it without modifying its length   
//7)entries() → returns a new Array Iterator object that contains the key/value pairs for each index in the array
//8)keys() → returns a new Array Iterator object that contains the keys for each index in the array
//9)values() → returns a new Array Iterator object that contains the values for each index in the array



//1)find() → returns the value of the first element in the array that satisfies the provided testing function, or undefined if no such element is found
let arr = [1, 2, 3, 4, 5];
let found = arr.find((element) => element > 3);
console.log(found); // Output: 4    

//2)findIndex() → returns the index of the first element in the array that satisfies the provided testing function, or -1 if no such element is found
let arr2 = [1, 2, 3, 4, 5];
let foundIndex = arr2.findIndex((element) => element > 3);
console.log(foundIndex); // Output: 3 (index of element 4)

//3)indexOf() → returns the first index at which a given element can be found in the array, or -1 if it is not present
let arr3 = [1, 2, 3, 4, 5];
let foundIndexof = arr3.indexOf((element) => element > 3);
console.log(foundIndexof); // Output: -1 (not found, because indexOf does not take a function as argument)
let foundIndexof1 = arr3.indexOf((element) => element);
console.log(foundIndexof1); // Output: -1 (not found, because indexOf does not take a function as argument)
console.log(arr3.indexOf(3)); // Output: 2
console.log(arr3.indexOf(6)); // Output: -1 (not found)

//4)lastIndexOf() → returns the last index at which a given element can be found in the array, or -1 if it is not present
let arr4 = [1, 2, 3, 4, 5, 3];
console.log(arr4.lastIndexOf(3)); // Output: 5 (last index of element 3)
console.log(arr4.lastIndexOf(6)); // Output: -1 (not found)

//5)fill() → fills all the elements of an array from a start index to an end index with a static value
let arr5 = [1, 2, 3, 4, 5];
arr5.fill(0, 1, 4); // fill with 0 from index 1 to index 4 (not included)(addvalue, start, end  )
console.log(arr5); // Output: [1, 0, 0, 0, 5]

//6)copyWithin() → shallow copies part of an array to another location in the same array and returns it without modifying its length
let arr6 = [1, 2, 3, 4, 5];
arr6.copyWithin(0, 3); // copy from index 3 to index 0 (target, start, end)
console.log(arr6); // Output: [4, 5, 3, 4, 5]

//7)entries() → returns a new Array Iterator object that contains the key/value pairs for each index in the array
let arr7 = ["a", "b", "c","b"];
let entries = arr7.entries();   
for (let entry of entries) {
  console.log(entry); // Output: [0, "a"] [1, "b"] [2, "c"] [3, "b"]
}

//8)keys() → returns a new Array Iterator object that contains the keys for each index in the array
let arr8 = ["a", "b", "c"];
let keys = arr8.keys();
console.log(keys); // Output: Array Iterator {} 
for (let key of keys) {
  console.log(key); // Output: 0 1 2
}   

//9)values() → returns a new Array Iterator object that contains the values for each index in the array
let arr9 = ["a", "b", "c"];
let values = arr9.values();
console.log(values); // Output: Array Iterator {}
for (let value of values) {
  console.log(value); // Output: "a" "b" "c"
}   


