//string: it is defined  as a single quote or double quote or backticks (``) and it is used to represent text data. It is a sequence of characters that can include letters, numbers, symbols, and spaces. Strings are immutable, which means that once a string is created, it cannot be changed. However, you can create a new string by concatenating or manipulating existing strings.

//Example of string declaration and manipulation
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello, ${str2}!`; // Using template literals to concatenate strings
console.log(str1); // Output: Hello
console.log(str2); // Output: World
console.log(str3); // Output: Hello, World!

//addition of NUMBER template literals
let num1 = 5;
let num2 = 10;
let sum = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.