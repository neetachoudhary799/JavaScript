//for...of (best for arrays)  //show values //no return values for objects ,we push values in array and show values
for (let num of [1, 2, 3]) {
  console.log(num);
}
//Output: 1, 2, 3

//for...in (best for objects)  //show keys
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key);
}
//Output: a, b, c

//for...in (best for objects)  //show values
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(obj[key]);
}
//Output: 1, 2, 3