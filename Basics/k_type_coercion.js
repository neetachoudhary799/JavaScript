//Type coercion means automatic conversion of one data type to another in JavaScript.

//Example of type coercion
//1. Implicit Coercion (Automatic)
let num = 5;
let str = "10";
let result1 = num + str;
console.log(result1); // Output: "510" (number 5 is coerced to string "5" and concatenated with "10")

let result2 = num - str;
console.log(result2); // Output: -5 (string "10" is coerced to number 10 and subtracted from 5)
console.log(true + 1); // 2 (true is coerced to 1 and added to 1)
console.log(false + 1); // 1 (false is coerced to 0 and added to 1) 

//2. Explicit Coercion (Manual)
Number("5");   // 5
String(10);    // "10"
Boolean(0);    // false
Boolean("")   // false
Boolean("hi") // true
let num2 = 5;
let str2 = "10";    
//Explicitly converting string to number
let result3 = num2 + Number(str2);
console.log(result3); // Output: 15 (string "10" is explicitly converted to number 10 and added to 5)   
//Explicitly converting number to string
let result4 = String(num2) + str2;
console.log(result4); // Output: "510" (number 5 is explicitly converted to string "5" and concatenated with "10")

//3. Equality Operators and Coercion
5 == "5"  // true  (coercion happens)(check only value)
5 === "5" // false (no coercion)(checks both value and type)

if ("0") {
  console.log("true");
}
//👉 "0" is truthy → prints "true"

console.log(true + false); // Output: 1 (true is coerced to 1 and false is coerced to 0, so 1 + 0 = 1)
console.log("5" - 2); // Output: 3 (string "5" is coerced to number 5 and then 2 is subtracted, so 5 - 2 = 3)
console.log("5" + 2); // Output: "52" (number 2 is coerced to string "2" and concatenated with "5", so "5" + "2" = "52")    
console.log([] + []); // Output: "" (both empty arrays are coerced to empty strings and concatenated, so "" + "" = "")
console.log([] + {}); // Output: "[object Object]" (empty array is coerced to empty string and object is coerced to "[object Object]", so "" + "[object Object]" = "[object Object]")
console.log({} + []); // Output: 0 (object is coerced to NaN and empty array is coerced to empty string, so NaN + "" = 0)
console.log(null + 1); // Output: 1 (null is coerced to 0 and then 1 is added, so 0 + 1 = 1)
console.log(undefined + 1); // Output: NaN (undefined is coerced to NaN and then 1 is added, so NaN + 1 = NaN)
console.log("" == 0); // Output: true (empty string is coerced to 0, so 0 == 0 is true)
console.log("" === 0); // Output: false (no coercion, empty string is not strictly equal to number 0)
console.log("0" == false); // Output: true (string "0" is coerced to number 0 and false is coerced to 0, so 0 == 0 is true)
console.log("0" === false); // Output: false (no coercion, string "0" is not strictly equal to boolean false)
console.log(Boolean([])); // Output: true (empty array is truthy)
console.log(Boolean({})); // Output: true (empty object is truthy)
console.log(Boolean("")); // Output: false (empty string is falsy)
console.log(Boolean(0)); // Output: false (0 is falsy)
console.log(Boolean(1)); // Output: true (non-zero numbers are truthy)