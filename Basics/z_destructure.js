//destructure: JavaScript feature used to unpack values from arrays.

//Example 1: Array Destructuring
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a);  //1
console.log(b);  //2
console.log(c);  //3

//Example 2: Object Destructuring
let obj = { name: "Neeta", age: 25 };
let { name, age } = obj;
console.log(name); //Neeta

//Example 3: Nested Destructuring
let nestedObj = { person: { name: "Neeta", age: 25 } };
let { person: { name: personName } } = nestedObj;
console.log(personName); //Neeta    

//Example 4: Default Values
let [x = 10, y = 20] = [5];
console.log(x); //5
console.log(y); //20 (default value used)

//Example 5: Rest Operator
let [first, second, ...rest] = [1, 2, 3, 4];
console.log(first); //1
console.log(second); //2
console.log(rest); //[3, 4]


//descructure with missing values
let values = [1, 2];
let [a,b,c]=values;
console.log(a); //1
console.log(b); //2
console.log(c); //undefined (no value for c)

