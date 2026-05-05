//spread operator: it allows an iterable such as an array or string or object.
//It is denoted by three dots (...).
//it is used to expand an array or object into individual elements. it can be used in function calls, array literals, and object literals.
//use cases:
//👉 Copying arrays /coping string /coping object
//👉 Merging arrays / merging string / merging object
//👉 Spreading elements in function calls
//👉 unique values in arrays
//👉 Combining objects


//copying arrays /coping string /coping object
let arr1=[1,2,3];
let arr2=[...arr1];
console.log(arr2); // [1, 2, 3]

let str1="Hello";
let str2=[...str1].join("");
console.log(str2); // "Hello"

let obj1={a:1,b:2};
let obj2={...obj1};
console.log(obj2); // {a: 1, b: 2}

//merging arrays / merging string / merging objects
let arr3=[4,5,6];
let mergedarr=[...arr1,...arr3];
console.log(mergedarr); // [1, 2, 3, 4, 5, 6]   

let str3=" World";
let mergedstr=[...str1,...str3].join("");
console.log(mergedstr); // "Hello World"

let obj3={c:3,d:4};
let mergedobj={...obj1,...obj3};
console.log(mergedobj); // {a: 1, b: 2, c: 3, d: 4}

//spreading elements in function calls
function sum(a,b,c){
    return a+b+c;
}
let numbers=[1,2,3];
console.log(sum(...numbers)); // 6

//unique values in arrays
let arr4=[1,2,2,3,4,4,5];
let uniquearr=[...new Set(arr4)];
console.log(uniquearr); // [1, 2, 3, 4, 5]  

//combining objects
let obj1={a:1,b:2};
let obj2={c:3,d:4};
let mergedobj={...obj1,...obj2};
console.log(mergedobj); // {a: 1, b: 2, c: 3, d: 4}

