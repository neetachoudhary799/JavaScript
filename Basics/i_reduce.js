//Imp : reduce()
//reduce() is used to convert an array into a single value (sum, object, array, etc.)

//Syntax: array.reduce((accumulator, currentValue, index, array) => { /* ... */ }, initialValue)

//accumulator: It accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
//currentValue: The current element being processed in the array.
//index (optional): The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided, otherwise starts from index 1.
//array (optional): The array reduce() was called upon.


//sum of array
let array = [3,4,5,6];
console.log(sumreduce(array));
function sumreduce(array){
    return array.reduce((acc,val)=>acc+val,0);
}

//Group By
let users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 }
];
let grouped = users.reduce((acc, user) => {
  (acc[user.age] = acc[user.age] || []).push(user);
  return acc;
}, {});
console.log(grouped); // Output: { '20': [ { name: 'A', age: 20 }, { name: 'B', age: 20 } ], '25': [ { name: 'C', age: 25 } ] }


//Count Occurrences
let fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }

//Flatten Array
let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
console.log(flatten(nestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7]

let arr = [1, [2, 3], [4]];
let flat = arr.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);
console.log(flat); // [1, 2, 3, 4]

//Find Maximum Number
let numbers = [5, 2, 9, 1, 5, 6];
let max = numbers.reduce((acc, cur) => {
  return cur > acc ? cur : acc;
}, numbers[0]);
console.log(max); // 9