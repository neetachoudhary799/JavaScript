//of: values
//in: keys
//for loop: best for arrays and strings
//for...of: best for arrays and strings (values)
//for...in: best for objects (keys)

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


//stringfor...of (best for strings)  //show values
let str = "Hello";
for (let char of str) {
  console.log(char);
}
//Output: H, e, l, l, o

//strindfor...in (best for strings)  //show keys
let str = "Hello";  
for (let index in str) {
  console.log(index);
}
//Output: 0, 1, 2, 3, 4