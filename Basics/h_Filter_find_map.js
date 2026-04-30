//Imp Topic: filter(), find(), map()

//filter: filter() used loop and returns a new array.
//Mostly used in searching and filterind data.
//it does not change the original array.

let arr = [1, 2, 3, 4, 5];
let result = arr.filter(num => num > 2);
console.log(result); // Output: [3, 4, 5]

console.log(arrfliter(arr)); // Output: [2, 4]
function arrfliter(arr){
    arr = arr.filter(num => num % 2 === 0);
    return arr;
}

let products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 }
];
let cheap = products.filter(p => p.price < 1000);
console.log(cheap); // Output: [{ name: "Shirt", price: 500 }]

//find: find() is used to find the first element in an array  and returns that element. 
// If no element satisfies the condition, it returns undefined.
//find() does not change the original array.

let found = arr.find(num => num > 2);
console.log(found); // Output: 3

console.log(arrfind(arr)); // Output: 2 only first even number
function arrfind(arr){
    return arr.find(num => num % 2 === 0);
}

//map: map() is used to transform each element of an array and returns a new array.
//map() does not change the original array.

let mapped = arr.map(num => num * 2);
console.log(mapped); // Output: [2, 4, 6, 8, 10]

console.log(arrmap(arr)); // Output: [1, 4, 9, 16, 25]
function arrmap(arr){
    return arr.map(num => num * num);
}
