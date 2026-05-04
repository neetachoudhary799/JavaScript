//array methods
//1)toString()===arr.toString() → converts array to string
//2)join()------Important--
//3)pop() 
//4)push()------Important--
//5)shift()
//6)unshift() 
//7)concat() -------Important--
//8)delete -------Important--
//9)Length -------Important--
//10)slice()
//11)splice() 
//12)reverse() 
//13)includes() -------Important--(true or false)


//1)toString() → converts array to string
let arr = [1, 2, 3];
console.log(arr.toString(8)); // Output: "1,2,3"

//2)join() → joins array elements into a string with a specified separator
console.log(arr.join("-")); // Output: "1-2-3"


//3)pop() → removes the last element from an array and returns it
let lastElement = arr.pop();
console.log(lastElement); // Output: 3
console.log(arr); // Output: [1, 2]

//4)push() → adds one or more elements to the end of an array and returns the new length of the array
let newLength = arr.push([4, 5]);
console.log(newLength); // Output: 4
console.log(arr); // Output: [1, 2, [4, 5]]

//5)shift() → removes the first element from an array and returns it
let firstElement = arr.shift();
console.log(firstElement); // Output: 1
console.log(arr); // Output: [2, [4, 5]]

//6)unshift() → adds one or more elements to the beginning of an array and returns the new length of the array
let newLength2 = arr.unshift(0);
console.log(newLength2); // Output: 3
console.log(arr); // Output: [0, 2, [4, 5]] 

//7)concat() → merges two or more arrays and returns a new array
let arr1 = [1, 2];
let arr2 = [3, 4];
let mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4]

//8)delete operator → used to remove an element from an array by index, but it does not change the length of the array and leaves a hole (undefined) in its place
let arr3 = [1, 2, 3];
delete arr3[1];
console.log(arr3); // Output: [1, undefined, 3]

//9)length property → represents the number of elements in an array, but it can be manually set to a different value, which can lead to unexpected behavior if not used carefully
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.length); // Output: 5
arr4.length = 3;
console.log(arr4); // Output: [1, 2, 3]

//10)splice() → changes the contents of an array by removing or replacing existing elements and/or adding new elements in place2        
let arr5 = [1, 2, 3, 4, 5];
//replace "3" with "a" and "b".
arr5.splice(2, 1, "a", "b");  // at index 2(start), remove 1 element (3) and add "a" and "b"
console.log(arr5); // Output: [1, 2, "a", "b", 4, 5]    
//remove "a" and "b"
arr5.splice(2, 2); // at index 2(start), remove 2 elements ("a" and "b")(how many elements to remove)
console.log(arr5); // Output: [1, 2, 4, 5]
//replace "4" with "c"
arr5.splice(2, 1, "c"); // at index 2(start), remove 1 element (4) and add "c"
console.log(arr5); // Output: [1, 2, "c", 5]
//add "d" and "e" at index 2 without removing any element
arr5.splice(2, 0, "d", "e");
console.log(arr5); // Output: [1, 2, "d", "e", "c", 5]

//11)slice() → returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let arr6 = [1, 2, 3, 4, 5];
let slicedArray = arr6.slice(1, 4); // from index 1 to index 4 (not included)
console.log(slicedArray); // Output: [2, 3, 4]

//12)reverse() → reverses the order of the elements of an array in place and returns the reversed array
let arr7 = [1, 2, 3];
arr7.reverse();
console.log(arr7); // Output: [3, 2, 1] 

//13)includes() → determines whether an array includes a certain value among its entries, returning true or false as appropriate
let arr8 = [1, 2, 3];
console.log(arr8.includes(2)); // Output: true
console.log(arr8.includes(4)); // Output: false