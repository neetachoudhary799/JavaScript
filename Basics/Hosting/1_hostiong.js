//Hoisting is a behavior in JavaScript where variables and function declarations are moved to the top of their scope before code execution.
// This means that you can use variables and functions before they are declared in the code.

// Example of hoisting with variables

var a;
console.log(a); // Output: undefined
a = 5;
console.log(a); // Output: 5


console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5 

let z;
console.log(z); // Output: undefined
z = 15;
console.log(z); // Output: 15


console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10   

console.log(d);  // Output: ReferenceError: Cannot access 'd' before initialization
const d = 25;
console.log(d); // Output: 25

const c;
console.log(c); // Output: SyntaxError: Missing initializer in const declaration
c = 20;
console.log(c); // Output: 20  

